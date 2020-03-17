import {Component, OnInit} from '@angular/core';
import {SessionService} from '../../../../services/session/session.service';
import {UserType} from '../../../../models/UserType';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  session;
  userType = UserType;

  constructor(private loginService: SessionService) {
  }

  ngOnInit(): void {
    this.session = this.loginService.getSession();
  }

}
