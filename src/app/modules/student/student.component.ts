import { Component, OnInit } from '@angular/core';
import {AdminNavDescriptor} from '../admin/models/admin-nav-descriptor';
import {StudentNavDescriptor} from './models/student-nav-descriptor';
import {SessionService} from '../../global-services/session/session.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  navDescriptor = StudentNavDescriptor.descriptor;

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
