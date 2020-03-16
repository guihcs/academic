import {Component, OnInit} from '@angular/core';
import {LoginService} from '../../../../services/login/login.service';
import {UserType} from '../../../../models/UserType';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  session;
  userType = UserType;

  constructor(private loginService: LoginService) {
  }

  ngOnInit(): void {
    this.session = this.loginService.getSession();
  }

}
