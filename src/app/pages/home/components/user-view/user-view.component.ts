import {Component, OnInit, ViewChild} from '@angular/core';
import {User, UserFormDescriptor} from '../../../../models/User';
import {BehaviorSubject} from 'rxjs';
import {ActivatedRoute} from '@angular/router';
import {UserService} from '../../../../services/user/user.service';
import {UserType} from '../../../../models/UserType';
import {MatSnackBar} from '@angular/material/snack-bar';
import {MatDialog} from '@angular/material/dialog';
import {ConfirmDeleteDialog} from './confirm-delete-dialog';

@Component({
  selector: 'app-user-view',
  templateUrl: './user-view.component.html',
  styleUrls: ['./user-view.component.css']
})
export class UserViewComponent implements OnInit {

  @ViewChild('userForm') userForm;
  formDescriptor;

  viewTitle;
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
    private dialog: MatDialog
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
    this.viewTitle = this.toPascalCase(UserType[this.userType]);
    this.userData = await this.userService.getUsers(+this.userType);
    this.dataSource = new BehaviorSubject<User[]>(this.userData);
  }

  showDetails(user) {
    this.user = user;
    this.formDescriptor = new UserFormDescriptor();

    delete this.formDescriptor.login;
    delete this.formDescriptor.password;

    for (const key of Object.keys(this.user)) {


      if (typeof this.user[key] === 'object') {


        for (const key1 of Object.keys(this.user[key])) {

          if (this.formDescriptor.hasOwnProperty(key1)) {
            this.formDescriptor[key1].default = this.user[key][key1];
          }
        }
      } else {
        if (this.formDescriptor.hasOwnProperty(key)) {
          this.formDescriptor[key].default = this.user[key];
        }
      }
    }


    this.isUpdating = true;


  }

  async updateUser() {
    let user = this.userForm.getResult();
    user['_id'] = this.user['_id'];
    if (await this.userService.updateUser(user)) {
      this.isUpdating = false;
      this.userForm.reset();
      this.updateView(this.paramMap);
      this.snackBar.open('User updated.', '', {
        duration: 2000
      });
    } else {
      this.snackBar.open('Error.', '', {
        duration: 2000
      });
    }

  }

  async delete(user) {
    let dialogRef = this.dialog.open(ConfirmDeleteDialog, {});

    dialogRef.afterClosed().subscribe(async res => {
      if (res === 'delete') {
        if (await this.userService.deleteUser(user)) {
          this.snackBar.open('User removed.', '', {
            duration: 2000
          });

        } else {
          this.snackBar.open('Error.', '', {
            duration: 2000
          });
        }
        this.dataSource.next(await this.userService.getUsers(+this.userType));
      }
    });


  }

  private toPascalCase(text: string) {
    return text[0].toUpperCase() + text.substr(1).toLowerCase();
  }

}



