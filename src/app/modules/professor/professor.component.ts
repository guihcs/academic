import { Component, OnInit } from '@angular/core';
import {AdminNavDescriptor} from '../admin/models/admin-nav-descriptor';
import {ProfessorNavDescriptor} from './models/professor-nav-descriptor';

@Component({
  selector: 'app-professor',
  templateUrl: './professor.component.html',
  styleUrls: ['./professor.component.css']
})
export class ProfessorComponent implements OnInit {

  navDescriptor = ProfessorNavDescriptor.descriptor;

  constructor() { }

  ngOnInit(): void {
  }


  logout(){

  }

}
