import {Component, OnInit, ViewChild} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {CoordinatorView} from '../../models/CoordinatorView';
import {DynamicFormsComponent} from '../../../../libs/dynamic-forms/dynamic-forms.component';
import {ActivatedRoute, Router} from '@angular/router';
import {BackendService} from '../../../../global-services/backend/backend.service';
import {UserService} from '../../../../global-services/user/user.service';
import {MatSnackBar} from '@angular/material/snack-bar';
import {MatDialog} from '@angular/material/dialog';
import {assign} from '../../../../utils/utils';
import {ConfirmDeleteDialogComponent} from '../../../../templates/confirm-delete-dialog/confirm-delete-dialog.component';
import {Course} from '../../../../global-models/Course';

@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.css']
})
export class CourseDetailsComponent implements OnInit {

  course: BehaviorSubject<Course> = new BehaviorSubject<Course>(null);
  pageTitle;
  @ViewChild('userForm')
  private userForm: DynamicFormsComponent;
  private backUrl;
  private userID;

  constructor(
    private activatedRoute: ActivatedRoute,
    private backend: BackendService,
    private userService: UserService,
    private router: Router,
    private snackBar: MatSnackBar,
    private dialog: MatDialog
  ) {
    activatedRoute.paramMap.subscribe(async paramMap => {
      this.userID = paramMap.get('id');
      let data = await this.backend.getAll('courses');
      let user = data.filter(user => user._id === this.userID)[0];
      let coordinatorView = new Course();
      assign(coordinatorView, user, 2);
      this.course.next(coordinatorView);
      this.backUrl = history.state.route;
    });
  }

  ngOnInit(): void {
  }

  async updateUser() {
    let user = this.userForm.getResult();
    user['_id'] = this.userID;
    console.log(user);

    if (await this.userService.updateUser(user)) {
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
        if (await this.backend.delete('users', this.course.getValue()._id)) {
          this.snackBar.open('User removed.', '');
          this.backToList();
        } else {
          this.snackBar.open('Error.', '');
        }

      }
    });
  }

}
