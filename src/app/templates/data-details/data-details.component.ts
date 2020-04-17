import {Component, Injector, Input, OnInit, ViewChild} from '@angular/core';
import {BehaviorSubject, from, Observable} from 'rxjs';
import {DisciplineDetails} from '../../global-models/DisciplineDetails';
import {DynamicFormsComponent} from '../../libs/dynamic-forms/dynamic-forms.component';
import {FormControl} from '@angular/forms';
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

  @Input() userData;
  @Input() collectionName;
  @Input() pageTitle;
  @Input() backUrl;

  @ViewChild('userForm')
  private userForm: DynamicFormsComponent;
  private userID;

  formControl = new FormControl();
  data;
  dataSource:DataSource;

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
      if(Object.keys(snapshot.data).length > 0) {

        this.pageTitle = snapshot.data.pageTitle;
        this.backUrl = snapshot.data.backUrl;
        this.dataSource = this.injector.get(snapshot.data.source);
        this.userData = fromPromise(this.dataSource.queryOne(snapshot.params.id));
      }
    });
  }

  async updateUser() {
    let user = this.userForm.getResult();
    user['_id'] = this.userID;
    let professorData = this.formControl.value;
    user.professor = {
      id: professorData._id,
      name: professorData.name
    };

    assign(this.data, user, 2);

    if (await this.backend.update(this.collectionName, this.data._id, this.data)) {
      this.snackBar.open('User updated.', '');
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
        if (await this.backend.delete(this.collectionName, this.userData._id)) {
          this.snackBar.open('User removed.', '');
          this.backToList();
        } else {
          this.snackBar.open('Error.', '');
        }

      }
    });
  }

}
