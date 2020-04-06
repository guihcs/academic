import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {SessionService} from '../../services/session/session.service';
import {UserType} from './models/UserType';
// @ts-ignore
import {AdminNavDescriptor} from './components/admin/admin-nav/admin-nav-descriptor';
// @ts-ignore
import {CoordinatorNavDescriptor} from './components/coordinator/coordinator-nav/coordinator-nav-descriptor';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  session;
  userType = UserType;
  navDescriptor;
  typeMap = {
    'ADMIN': AdminNavDescriptor,
    'COORDINATOR': CoordinatorNavDescriptor,
  };
  selected;

  constructor(private router: Router, private loginService: SessionService) {
  }

  ngOnInit(): void {
    this.session = this.loginService.getSession();
    this.navDescriptor = this.typeMap[UserType[this.session.type]].descriptor;
  }


  async logout() {
    this.loginService.logout();
    await this.router.navigate(['/']);
  }

}
