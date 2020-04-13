import { Component, OnInit } from '@angular/core';
import {AdminNavDescriptor} from '../admin/models/admin-nav-descriptor';
import {CoordinatorNavDescriptor} from './models/coordinator-nav-descriptor';

@Component({
  selector: 'app-coordinator',
  templateUrl: './coordinator.component.html',
  styleUrls: ['./coordinator.component.css']
})
export class CoordinatorComponent implements OnInit {

  navDescriptor = CoordinatorNavDescriptor.descriptor;

  constructor() { }

  ngOnInit(): void {
  }


  logout(){

  }

}
