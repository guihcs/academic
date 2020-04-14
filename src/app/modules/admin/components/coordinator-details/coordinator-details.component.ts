import {Component, OnInit, ViewChild} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {ViewUser} from '../../../../global-models/ViewUser';
import {DynamicFormsComponent} from '../../../../libs/dynamic-forms/dynamic-forms.component';
import {ActivatedRoute, Router} from '@angular/router';
import {UserService} from '../../../../global-services/user/user.service';
import {MatSnackBar} from '@angular/material/snack-bar';
import {MatDialog} from '@angular/material/dialog';
import {ConfirmDeleteDialogComponent} from '../../../../templates/confirm-delete-dialog/confirm-delete-dialog.component';
import {CoordinatorView} from '../../models/CoordinatorView';
import {BackendService} from '../../../../global-services/backend/backend.service';
import {assign} from '../../../../utils/utils';

@Component({
  selector: 'app-coordinator-details',
  templateUrl: './coordinator-details.component.html',
  styleUrls: ['./coordinator-details.component.css']
})
export class CoordinatorDetailsComponent implements OnInit {

  user: BehaviorSubject<CoordinatorView> = new BehaviorSubject<CoordinatorView>(null);
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
      let data = await this.backend.getAll('users');
      let user = data.filter(user => user._id === this.userID)[0];
      let coordinatorView = new CoordinatorView();
      assign(coordinatorView, user, 2);
      console.log(coordinatorView);

      this.user.next(coordinatorView);
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
        if (await this.backend.delete('users', this.user.getValue()._id)) {
          this.snackBar.open('User removed.', '');
          this.backToList();
        } else {
          this.snackBar.open('Error.', '');
        }

      }
    });
  }

}
