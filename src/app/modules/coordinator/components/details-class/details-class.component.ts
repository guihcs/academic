import {Component, OnInit, ViewChild} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {ViewUser} from '../../../../global-models/ViewUser';
import {DynamicFormsComponent} from '../../../../libs/dynamic-forms/dynamic-forms.component';
import {ActivatedRoute, Router} from '@angular/router';
import {UserService} from '../../../../global-services/user/user.service';
import {MatSnackBar} from '@angular/material/snack-bar';
import {MatDialog} from '@angular/material/dialog';
import {ConfirmDeleteDialogComponent} from '../../../../templates/confirm-delete-dialog/confirm-delete-dialog.component';
import {ViewProfessor} from '../../../../global-models/ViewProfessor';
import {BackendService} from '../../../../global-services/backend/backend.service';
import {assign} from '../../../../utils/utils';
import {Class} from '../../../../global-models/Class';
import {UserType} from '../../../../global-models/UserType';

@Component({
  selector: 'app-details-class',
  templateUrl: './details-class.component.html',
  styleUrls: ['./details-class.component.css']
})
export class DetailsClassComponent implements OnInit {


  user: BehaviorSubject<Class> = new BehaviorSubject<Class>(null);
  pageTitle;
  @ViewChild('userForm')
  private userForm: DynamicFormsComponent;
  private backUrl;
  private userID;

  disciplines;
  students;

  constructor(
    private activatedRoute: ActivatedRoute,
    private backend: BackendService,
    private router: Router,
    private snackBar: MatSnackBar,
    private dialog: MatDialog
  ) {
    activatedRoute.paramMap.subscribe(async paramMap => {
      this.userID = paramMap.get('id');
      let rawData = await this.backend.query('classes', this.userID);
      let class1 = new Class();
      assign(class1, rawData[0], 2);
      this.user.next(class1);
      this.backUrl = history.state.route;

      let all = await this.backend.getAll('subjects');

      this.disciplines = all.filter(v => {
        return v.period === class1.period && v.course.name === class1.course.name;
      });

      let users = await this.backend.getAll('users');
      this.students = users.filter(v => {
        return v.type === UserType.STUDENT && v.class.name === class1.name;
      });
    });
  }

  ngOnInit(): void {
  }

  async updateUser() {
    /*let user = this.userForm.getResult();
    user['_id'] = this.userID;

    if (await this.userService.updateUser(user)) {
      this.snackBar.open('User updated.', '');
    } else {
      this.snackBar.open('Error.', '');
    }*/
  }


  backToList() {
    this.router.navigate([this.backUrl]);
  }


  async delete() {
    let dialogRef = this.dialog.open(ConfirmDeleteDialogComponent, {});
    dialogRef.afterClosed().subscribe(async res => {
      if (res === 'delete') {
        let value = this.user.getValue();

        if (await this.backend.delete('classes', value._id)) {
          this.snackBar.open('User removed.', '');
          this.backToList();
        } else {
          this.snackBar.open('Error.', '');
        }
      }
    });
  }

}
