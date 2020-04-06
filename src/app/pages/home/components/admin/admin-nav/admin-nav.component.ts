import {Component, OnInit} from '@angular/core';
import {UserType} from '../../../models/UserType';
import {Router} from '@angular/router';

@Component({
  selector: 'app-admin-nav',
  templateUrl: './admin-nav.component.html',
  styleUrls: ['./admin-nav.component.css']
})
export class AdminNavComponent implements OnInit {

  userType = UserType;
  selected;

  constructor(private router: Router) {
  }

  ngOnInit(): void {

  }

}
