import {Component, EventEmitter, Injector, Input, OnInit, Output, ViewChild} from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {Observable} from 'rxjs';
import {ActivatedRoute, Router} from '@angular/router';
import {fromPromise} from 'rxjs/internal-compatibility';

@Component({
  selector: 'app-data-view',
  templateUrl: './data-view.component.html',
  styleUrls: ['./data-view.component.css']
})
export class DataViewComponent implements OnInit {

  @Input() title;
  @Input() placeholder;
  @Input() columnsDef;
  @Input() data: Observable<any>;
  @Input() filter;
  @Input() detailsPath;
  @Input() backRoute;
  @Output() rowClick = new EventEmitter();

  displayedColumns: string[];
  dataSource: MatTableDataSource<any>;

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private injector: Injector
  ) {

  }

  ngOnInit() {

    this.activatedRoute.params.subscribe(params => {
      let snapshot = this.activatedRoute.snapshot;
      if(Object.keys(snapshot.data).length > 0) {
        this.title = snapshot.data.title;
        this.backRoute = snapshot.data.backRoute;
        this.columnsDef = snapshot.data.columnsDef;
        this.detailsPath = snapshot.data.detailsRoute;
        this.placeholder = snapshot.data.placeholder;
        this.data = fromPromise(this.injector.get(snapshot.data.source).getAll());
      }
    });

    this.data?.subscribe(data => {
      this.displayedColumns = this.columnsDef?.map(v => v.field);
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
      if(this.filter) this.dataSource.filterPredicate = this.filter;
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  viewDetails(row: any) {
    this.router.navigate([this.detailsPath, row._id], {state: {route: this.backRoute}});
  }

}
