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

@Component({
  selector: 'app-details-professor',
  templateUrl: './details-professor.component.html',
  styleUrls: ['./details-professor.component.css']
})
export class DetailsProfessorComponent implements OnInit {


  user: BehaviorSubject<ViewProfessor> = new BehaviorSubject<ViewProfessor>(null);
  pageTitle;
  @ViewChild('userForm')
  private userForm: DynamicFormsComponent;
  private backUrl;
  private userID;

  constructor(
    private activatedRoute: ActivatedRoute,
    private backend: BackendService,
    private router: Router,
    private snackBar: MatSnackBar,
    private dialog: MatDialog
  ) {
    activatedRoute.paramMap.subscribe(async paramMap => {
      this.userID = paramMap.get('id');
      let rawData = await this.backend.query('users', this.userID);
      let professor = new ViewProfessor();
      assign(professor, rawData[0], 2);
      this.user.next(professor);

      this.backUrl = history.state.route;
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
        if (await this.backend.delete('users', this.user.getValue())) {
          this.snackBar.open('User removed.', '');
          this.backToList();
        } else {
          this.snackBar.open('Error.', '');
        }

      }
    });
  }

}
