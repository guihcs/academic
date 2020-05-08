import {Component, Injector, Input, OnInit, ViewChild} from '@angular/core';
import {DynamicFormsComponent} from '../../libs/dynamic-forms/dynamic-forms.component';
import {ActivatedRoute, Router} from '@angular/router';
import {BackendService} from '../../global-services/backend/backend.service';
import {MatSnackBar} from '@angular/material/snack-bar';
import {MatDialog} from '@angular/material/dialog';
import {assign} from '../../utils/utils';
import {ConfirmDeleteDialogComponent} from '../confirm-delete-dialog/confirm-delete-dialog.component';
import {DataSource} from '../../global-models/DataSource';
import {fromPromise} from 'rxjs/internal-compatibility';

@Component({
  selector: 'app-data-details',
  templateUrl: './data-details.component.html',
  styleUrls: ['./data-details.component.css']
})
export class DataDetailsComponent implements OnInit {

  @Input() dataDescriptor;
  @Input() collectionName;
  @Input() pageTitle;
  @Input() backUrl;
  @Input() updateMessage;
  @Input() deleteMessage;
  @Input() edit = true;

  @ViewChild('dynamicFormsComponent')
  private dynamicFormsComponent: DynamicFormsComponent;
  private dataID;
  dataSource:DataSource;
  data = {};

  constructor(
    private activatedRoute: ActivatedRoute,
    private backend: BackendService,
    private router: Router,
    private snackBar: MatSnackBar,
    private dialog: MatDialog,
    private injector: Injector
  ) {

  }

  ngOnInit(): void {

    this.activatedRoute.params.subscribe(params => {
      let snapshot = this.activatedRoute.snapshot;
      this.dataID = params.id;
      if(Object.keys(snapshot.data).length > 0) {
        this.collectionName = snapshot.data.collectionName;
        this.pageTitle = snapshot.data.pageTitle;
        this.backUrl = snapshot.data.backUrl;
        this.dataSource = this.injector.get(snapshot.data.source);
        this.deleteMessage = snapshot.data.deleteMessage;
        this.updateMessage = snapshot.data.updateMessage;

        if(Object.keys(snapshot.data).indexOf('edit') >= 0) this.edit = snapshot.data.edit;
        this.dataDescriptor = fromPromise(this.dataSource.queryOne(snapshot.params.id));
      }
    });
  }

  async updateData() {
    let rawData = this.dynamicFormsComponent.getResult();
    rawData['_id'] = this.dataID;

    assign(this.data, rawData, 2);

    if (await this.dataSource.update(this.data)) {
      this.snackBar.open(this.updateMessage, '');
    } else {
      this.snackBar.open('Error.', '');
    }
  }


  backToList() {
    this.router.navigate([this.backUrl]);
  }


  async delete() {
    let dialogRef = this.dialog.open(ConfirmDeleteDialogComponent, {});
    dialogRef.afterClosed().subscribe(async res => {
      if (res === 'delete') {
        if (await this.dataSource.delete(await this.dataDescriptor.toPromise())) {
          this.snackBar.open(this.deleteMessage, '');
          this.backToList();
        } else {
          this.snackBar.open('Error.', '');
        }

      }
    });
  }

}
