import {Component, OnInit} from '@angular/core';
import {UserType} from '../../../../../models/UserType';
import {UserComponent} from '../../user/user.component';

@Component({
  selector: 'app-professor-form',
  templateUrl: '../../user/user.component.html',
})
export class ProfessorFormComponent extends UserComponent implements OnInit {

  ngOnInit(): void {
    this.title = 'Insert Professor';
    super.ngOnInit();
  }

  addUser(user) {
    user.type = UserType.PROFESSOR;
    super.addUser(user);
  }

}
