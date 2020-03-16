import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {User} from '../../../../models/User';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {

  user: User = new User();
  @Output() formResult = new EventEmitter();

  constructor() {
  }

  ngOnInit(): void {

  }

  emitUser() {
    this.formResult.emit(this.user);
    this.user = new User();
  }

}
