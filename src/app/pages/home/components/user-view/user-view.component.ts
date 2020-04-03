import {ChangeDetectorRef, Component, OnInit, ViewChild} from '@angular/core';
import {User} from '../../../../models/User';
import {BehaviorSubject} from 'rxjs';
import {ActivatedRoute} from '@angular/router';
import {UserService} from '../../../../services/user/user.service';
import {UserType} from '../../../../models/UserType';
import {MatSnackBar} from '@angular/material/snack-bar';
import {MatDialog} from '@angular/material/dialog';
import {ConfirmDeleteDialog} from './confirm-delete-dialog';
import 'reflect-metadata';
import {toPascalCase} from '../../../../utils/utils';
import {DynamicFormsComponent} from 'dynamic-forms';

@Component({
  selector: 'app-user-view',
  templateUrl: './user-view.component.html',
  styleUrls: ['./user-view.component.css']
})
export class UserViewComponent implements OnInit {

  @ViewChild('userForm', {read: DynamicFormsComponent}) userForm;
  pageTitle;
  isUpdating = false;
  userType;
  userData: User[];
  user: User;
  dataSource: BehaviorSubject<User[]>;
  paramMap;
  displayedColumns = ['name', 'cpf', 'remove'];

  constructor(
    private route: ActivatedRoute,
    private userService: UserService,
    private snackBar: MatSnackBar,
    private dialog: MatDialog,
    private changeDetectorRef: ChangeDetectorRef
  ) {


  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(paramMap => {
      this.paramMap = paramMap;
      this.updateView(paramMap);
    });
  }

  async updateView(params) {
    this.isUpdating = false;
    this.userType = +params.get('userType');
    this.pageTitle = toPascalCase(UserType[this.userType]);
    this.userData = await this.userService.getUsers(+this.userType);
    this.dataSource = new BehaviorSubject<User[]>(this.userData);
  }

  showDetails(user) {
    this.user = user;
    Reflect.defineMetadata('email', {type: 'label', label: 'Email'}, this.user);
    Reflect.defineMetadata('password', null, this.user);
    this.isUpdating = true;
    this.changeDetectorRef.detectChanges();
    this.userForm.reset();
  }

  async updateUser() {
    let user = this.userForm.getResult();
    user['_id'] = this.user['_id'];
    if (await this.userService.updateUser(user)) {
      this.isUpdating = false;
      this.userForm.reset();
      this.updateView(this.paramMap);
      this.snackBar.open('User updated.', '');
    } else {
      this.snackBar.open('Error.', '');
    }
  }

  async delete(user) {
    let dialogRef = this.dialog.open(ConfirmDeleteDialog, {});
    dialogRef.afterClosed().subscribe(async res => {
      if (res === 'delete') {
        if (await this.userService.deleteUser(user)) {
          this.snackBar.open('User removed.', '');
        } else {
          this.snackBar.open('Error.', '');
        }
        this.dataSource.next(await this.userService.getUsers(+this.userType));
      }
    });
  }


}



