import {Component, OnInit} from '@angular/core';
import {User} from '../../../../models/User';
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

  viewTitle;
  isUpdating = false;
  userType;
  userData: User[];
  user: User;
  dataSource: BehaviorSubject<User[]>;

  displayedColumns = ['name', 'cpf', 'remove'];

  constructor(
    private route: ActivatedRoute,
    private userService: UserService
  ) {


  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(paramMap => {
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
    this.isUpdating = true;
    this.user = user;
  }

  async updateUser() {
    await this.userService.updateUser(this.user);
    this.isUpdating = false;
    this.user = null;
  }

  async delete(user) {
    await this.userService.deleteUser(user);
    this.dataSource.next(await this.userService.getUsers(+this.userType));
  }

}
