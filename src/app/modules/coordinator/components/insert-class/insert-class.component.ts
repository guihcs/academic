import {AfterViewInit, Component, OnInit} from '@angular/core';
import {assign} from '../../../../utils/utils';
import {Class} from '../../../../global-models/Class';
import {SessionService} from '../../../../global-services/session/session.service';

@Component({
  selector: 'app-insert-class',
  templateUrl: './insert-class.component.html',
  styleUrls: ['./insert-class.component.css']
})
export class InsertClassComponent implements OnInit {

  collectionName = 'classes';
  dataType = Class;
  course;

  constructor(private sessionService: SessionService) {
  }

  ngOnInit(): void {
    this.course = this.sessionService.getSession().course;
  }

  async saveClass(data, injectedData) {
    let user = new Class();
    user.course = injectedData;
    assign(user, data, 2);
    return user;
  }

}
