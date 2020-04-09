import { Component, OnInit } from '@angular/core';
import {AdminNavDescriptor} from './models/admin-nav-descriptor';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  navDescriptor = AdminNavDescriptor.descriptor;

  constructor() { }

  ngOnInit(): void {
  }


  logout(){

  }

}
