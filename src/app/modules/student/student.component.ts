import { Component, OnInit } from '@angular/core';
import {AdminNavDescriptor} from '../admin/models/admin-nav-descriptor';
import {StudentNavDescriptor} from './models/student-nav-descriptor';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  navDescriptor = StudentNavDescriptor.descriptor;

  constructor() { }

  ngOnInit(): void {
  }


  logout(){

  }

}
