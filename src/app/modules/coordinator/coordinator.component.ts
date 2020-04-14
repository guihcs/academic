import { Component, OnInit } from '@angular/core';
import {AdminNavDescriptor} from '../admin/models/admin-nav-descriptor';
import {CoordinatorNavDescriptor} from './models/coordinator-nav-descriptor';
import {SessionService} from '../../global-services/session/session.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-coordinator',
  templateUrl: './coordinator.component.html',
  styleUrls: ['./coordinator.component.css']
})
export class CoordinatorComponent implements OnInit {

  navDescriptor = CoordinatorNavDescriptor.descriptor;

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
