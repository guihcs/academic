import {Component, OnInit} from '@angular/core';
import {UserService} from '../../../../services/user/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
})
export class UserComponent implements OnInit {

  title: string;

  constructor(private userService: UserService) {
  }

  ngOnInit(): void {
  }

  addUser(user) {
    this.userService.saveUser(user);
  }
}
