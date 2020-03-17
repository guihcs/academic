import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {User} from '../../../../models/User';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  @Input() title: string;
  @Input() user: User;
  @Output() updateUser = new EventEmitter();

  constructor() {
  }

  ngOnInit(): void {
  }


}
