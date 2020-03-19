import {Component, OnInit, ViewChild} from '@angular/core';
import {User, UserFormDescriptor} from '../../../../models/User';
import {BehaviorSubject} from 'rxjs';
import {ActivatedRoute} from '@angular/router';
import {UserService} from '../../../../services/user/user.service';
import {UserType} from '../../../../models/UserType';

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
    private userService: UserService
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
    this.viewTitle = UserType[this.userType];
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
          if (this.formDescriptor.hasOwnProperty(key)) {
            this.formDescriptor[key].default = this.user[key][key1];
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
    console.log(user);

    await this.userService.updateUser(user);
    this.isUpdating = false;
    this.userForm.reset();
    this.updateView(this.paramMap);
  }

  async delete(user) {
    await this.userService.deleteUser(user);
    this.dataSource.next(await this.userService.getUsers(+this.userType));
  }

}
