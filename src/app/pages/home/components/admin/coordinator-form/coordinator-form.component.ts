import {UserType} from '../../../../../models/UserType';
import {UserComponent} from '../../user/user.component';
import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-coordinator',
  templateUrl: '../../user/user.component.html',
})
export class CoordinatorFormComponent extends UserComponent implements OnInit {

  ngOnInit(): void {
    this.title = 'Insert Coordinator';
    super.ngOnInit();
  }

  addUser(user) {
    user.type = UserType.COORDINATOR;
    super.addUser(user);
  }

}
