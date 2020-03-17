import {Component, OnInit} from '@angular/core';
import {User} from '../../../../models/User';
import {UserService} from '../../../../services/user/user.service';
import {ActivatedRoute} from '@angular/router';
import {UserType} from '../../../../models/UserType';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {

  userType;
  title;
  user: User = new User();

  constructor(private route: ActivatedRoute, private userService: UserService) {
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(map => {
      this.userType = +map.get('userType');
      this.title = UserType[this.userType];
    });

  }

  saveUser() {
    this.user.type = +this.userType;
    this.userService.saveUser(this.user);
    this.user = new User();
  }

}
