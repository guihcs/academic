import {Component, OnInit, ViewChild} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {ViewUser} from '../../../../global-models/ViewUser';
import {DynamicFormsComponent} from '../../../../libs/dynamic-forms/dynamic-forms.component';
import {ActivatedRoute, Router} from '@angular/router';
import {UserService} from '../../../../global-services/user/user.service';
import {MatSnackBar} from '@angular/material/snack-bar';
import {MatDialog} from '@angular/material/dialog';
import {ConfirmDeleteDialogComponent} from '../../../../templates/confirm-delete-dialog/confirm-delete-dialog.component';
import {BackendService} from '../../../../global-services/backend/backend.service';
import {assign} from '../../../../utils/utils';
import {Discipline} from '../../../../global-models/Discipline';
import {FormControl} from '@angular/forms';
import {UserType} from '../../../../global-models/UserType';

@Component({
  selector: 'app-details-subject',
  templateUrl: './details-subject.component.html',
  styleUrls: ['./details-subject.component.css']
})
export class DetailsSubjectComponent implements OnInit {

  user: BehaviorSubject<Discipline> = new BehaviorSubject<Discipline>(null);
  pageTitle;
  @ViewChild('userForm')
  private userForm: DynamicFormsComponent;
  private backUrl;
  private userID;

  formControl = new FormControl();
  professors;
  data;

  constructor(
    private activatedRoute: ActivatedRoute,
    private backend: BackendService,
    private router: Router,
    private snackBar: MatSnackBar,
    private dialog: MatDialog
  ) {
    activatedRoute.paramMap.subscribe(async paramMap => {
      this.userID = paramMap.get('id');
      let rawData = await this.backend.query('subjects', this.userID);
      let professor = new Discipline();
      assign(professor, rawData[0], 2);
      this.user.next(professor);
      this.backUrl = history.state.route;
      this.professors = (await this.backend.getAll('users')).filter(v => v.type === UserType.PROFESSOR);
      this.data = professor;

      this.formControl.setValue(this.professors.find(v => v._id === this.data.professor.id));

    });
  }

  ngOnInit(): void {
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

    if (await this.backend.update('subjects', this.data._id, this.data)) {
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
        if (await this.backend.delete('subjects', this.user.getValue())) {
          this.snackBar.open('User removed.', '');
          this.backToList();
        } else {
          this.snackBar.open('Error.', '');
        }

      }
    });
  }

}
