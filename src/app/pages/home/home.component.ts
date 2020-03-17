import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {SessionService} from '../../services/session/session.service';
import {UserType} from '../../models/UserType';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  session;
  userType = UserType;

  constructor(private router: Router, private loginService: SessionService) {
  }

  ngOnInit(): void {
    this.session = this.loginService.getSession();
  }


  async logout() {
    this.loginService.logout();
    await this.router.navigate(['/']);
  }


}
