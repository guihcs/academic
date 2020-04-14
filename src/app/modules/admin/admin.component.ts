import { Component, OnInit } from '@angular/core';
import {AdminNavDescriptor} from './models/admin-nav-descriptor';
import {SessionService} from '../../global-services/session/session.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  navDescriptor = AdminNavDescriptor.descriptor;

  constructor(
    private sessionService: SessionService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }


  logout(){
    this.sessionService.logout();
    this.router.navigate(['/login']);
  }

}
