import {Component, OnInit, ViewChild} from '@angular/core';
import {DynamicFormsComponent} from '../../libs/dynamic-forms/dynamic-forms.component';
import {BehaviorSubject} from 'rxjs';
import {MatDialog} from '@angular/material/dialog';
import {ViewUser} from '../../global-models/ViewUser';
import {ActivatedRoute, Router} from '@angular/router';
import {UserService} from '../../global-services/user/user.service';
import {MatSnackBar} from '@angular/material/snack-bar';
import {ConfirmDeleteDialogComponent} from '../confirm-delete-dialog/confirm-delete-dialog.component';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  user: BehaviorSubject<ViewUser> = new BehaviorSubject<ViewUser>(null);
  pageTitle;
  @ViewChild('userForm')
  private userForm: DynamicFormsComponent;
  private backUrl;
  private userID;

  constructor(
    private activatedRoute: ActivatedRoute,
    private userService: UserService,
    private router: Router,
    private snackBar: MatSnackBar,
    private dialog: MatDialog
  ) {
    activatedRoute.paramMap.subscribe(async paramMap => {
      this.userID = paramMap.get('userID');
      this.user.next(await userService.queryUser(this.userID));

      this.backUrl = history.state.route;
    });
  }

  ngOnInit(): void {
  }

  async updateUser() {
    let user = this.userForm.getResult();
    user['_id'] = this.userID;

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
        if (await this.userService.deleteUser(this.user.getValue())) {
          this.snackBar.open('User removed.', '');
          this.backToList();
        } else {
          this.snackBar.open('Error.', '');
        }

      }
    });
  }

}
