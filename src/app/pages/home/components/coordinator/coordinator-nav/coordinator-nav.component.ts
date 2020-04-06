import {Component, OnInit} from '@angular/core';
import {UserType} from '../../../models/UserType';

@Component({
  selector: 'app-coordinator-nav',
  templateUrl: './coordinator-nav.component.html',
  styleUrls: ['./coordinator-nav.component.css']
})
export class CoordinatorNavComponent implements OnInit {

  userType = UserType;
  selected;

  constructor() {
  }

  ngOnInit(): void {
  }

}
