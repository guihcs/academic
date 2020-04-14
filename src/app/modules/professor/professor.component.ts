import { Component, OnInit } from '@angular/core';
import {AdminNavDescriptor} from '../admin/models/admin-nav-descriptor';
import {ProfessorNavDescriptor} from './models/professor-nav-descriptor';
import {SessionService} from '../../global-services/session/session.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-professor',
  templateUrl: './professor.component.html',
  styleUrls: ['./professor.component.css']
})
export class ProfessorComponent implements OnInit {

  navDescriptor = ProfessorNavDescriptor.descriptor;

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
