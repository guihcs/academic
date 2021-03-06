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
  @Input() columnsDef: any[];
  @Input() data: Observable<any>;
  @Input() filter;
  @Input() detailsPath;
  @Output() rowClick = new EventEmitter();


  displayedColumns: string[];
  dataSource: MatTableDataSource<any>;

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  private filterFunction = (data, filter) => {
    let serializedFields = [];

    for (const columnsDefElement of this.columnsDef) {
      serializedFields.push(data[columnsDefElement.field]);
    }

    return serializedFields.join().toLocaleLowerCase().indexOf(filter) >= 0;
  };

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
        this.columnsDef = snapshot.data.columnsDef;
        this.detailsPath = snapshot.data.detailsRoute;
        this.placeholder = snapshot.data.placeholder;
        if(!this.placeholder) this.placeholder = this.buildPlaceholder();
        this.filter = snapshot.data.filter;
        if(!this.filter) this.filter = this.filterFunction;
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

  private buildPlaceholder(){

    if (this.columnsDef.length > 1){
      let commaSeparatedPart = this.columnsDef.slice(0, this.columnsDef.length -1).map(v => v.header).join(', ');
      return commaSeparatedPart + ' or ' + this.columnsDef[this.columnsDef.length-1].header;
    }else {
      return this.columnsDef.map(v => v.header).join(', ');
    }

  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  viewDetails(row: any) {
    this.router.navigate([this.detailsPath(row)]);
  }

}
