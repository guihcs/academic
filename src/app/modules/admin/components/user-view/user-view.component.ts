import {Component, EventEmitter, Injector, Input, OnInit, Output, ViewChild} from '@angular/core';
import {Observable} from 'rxjs';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {ActivatedRoute, Router} from '@angular/router';
import {BackendService} from '../../../../global-services/backend/backend.service';

@Component({
  selector: 'app-user-view',
  templateUrl: './user-view.component.html',
  styleUrls: ['./user-view.component.css']
})
export class UserViewComponent implements OnInit {

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

  source;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private injector: Injector,
    private backendService: BackendService
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
        this.source = this.injector.get(snapshot.data.source);
      }
    });

    this.backendService.count('users').then(v => {
      this.paginator.length = v.count;

      this.displayedColumns = this.columnsDef?.map(v => v.field);
      this.dataSource = new MatTableDataSource([]);
      this.dataSource.sort = this.sort;
      if(this.filter) this.dataSource.filterPredicate = this.filter;
      this.pageChange({pageIndex: 0});
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
    this.router.navigate([this.detailsPath(row)]);
  }

  async pageChange(ev){
    let min = ev.pageIndex * this.paginator.pageSize;
    let max = (ev.pageIndex + 1) * this.paginator.pageSize;
    this.dataSource.data = await this.source.page(min, max);
  }

  private filterFunction = (data, filter) => {
    let serializedFields = [];

    for (const columnsDefElement of this.columnsDef) {
      serializedFields.push(data[columnsDefElement.field]);
    }

    return serializedFields.join().toLocaleLowerCase().indexOf(filter) >= 0;
  };

  private buildPlaceholder(){

    if (this.columnsDef.length > 1){
      let commaSeparatedPart = this.columnsDef.slice(0, this.columnsDef.length -1).map(v => v.header).join(', ');
      return commaSeparatedPart + ' or ' + this.columnsDef[this.columnsDef.length-1].header;
    }else {
      return this.columnsDef.map(v => v.header).join(', ');
    }

  }

}
