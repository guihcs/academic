import {Component, ElementRef, EventEmitter, Injector, Input, OnInit, Output, QueryList, ViewChild, ViewChildren} from '@angular/core';
import {Observable} from 'rxjs';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {ActivatedRoute, Router} from '@angular/router';
import {fromPromise} from 'rxjs/internal-compatibility';
import {ImagePopupService} from '../../../../global-services/image-popup/image-popup.service';
import {CdkOverlayOrigin} from '@angular/cdk/overlay';

@Component({
  selector: 'app-view-student',
  templateUrl: './view-student.component.html',
  styleUrls: ['./view-student.component.css']
})
export class ViewStudentComponent implements OnInit {

  @Input() title;
  @Input() placeholder;
  @Input() columnsDef: any[];
  @Input() data: Observable<any>;
  @Input() filter;
  @Input() detailsPath;
  @Output() rowClick = new EventEmitter();

  _rawData;
  private popup;

  displayedColumns: string[];
  dataSource: MatTableDataSource<any>;

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  @ViewChildren(CdkOverlayOrigin) origins: QueryList<CdkOverlayOrigin>;
  @ViewChildren('matRow') rows: QueryList<ElementRef>;

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
    private imagePopupService: ImagePopupService,
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
      this._rawData = data;
      this.displayedColumns = this.columnsDef?.map(v => v.field);
      this.dataSource = new MatTableDataSource(data.filter(v => v.active));
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
    this.imagePopupService.close();
  }


  showInactives(value){
    this.dataSource.data = this._rawData.filter(v => v.active != value.checked);
  }

  displayImage(row, element){
    if (element.image === 'undefined') return;
    let index = this.rows.toArray().findIndex(e => e === row);
    let origin = this.origins.toArray()[index];
    this.imagePopupService.open(origin, element.image);
  }

  closeImage(){
    this.imagePopupService.close();

  }
}
