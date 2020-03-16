import {Component, OnInit} from '@angular/core';
import {UserType} from '../../../../../models/UserType';
import {UserComponent} from '../../user/user.component';

@Component({
  selector: 'app-student-form',
  templateUrl: '../../user/user.component.html',
})
export class StudentFormComponent extends UserComponent implements OnInit {

  ngOnInit(): void {
    this.title = 'Insert Student';
    super.ngOnInit();
  }

  addUser(user) {
    user.type = UserType.STUDENT;
    super.addUser(user);
  }

}
