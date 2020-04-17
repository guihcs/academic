import {Component, OnInit} from '@angular/core';
import {assign} from '../../../../utils/utils';
import {Discipline} from '../../../../global-models/Discipline';
import {SessionService} from '../../../../global-services/session/session.service';

@Component({
  selector: 'app-insert-subject',
  templateUrl: './insert-subject.component.html',
  styleUrls: ['./insert-subject.component.css']
})
export class InsertSubjectComponent implements OnInit {

  collectionName = 'users';
  pageTitle = 'Insert Discipline';
  dataType = Discipline;
  course;

  constructor(private sessionService: SessionService) {
  }

  ngOnInit(): void {
    this.course = this.sessionService.getSession().course;
  }

  async prepareSubjectData(data, injectedData) {
    data.course = injectedData;
    let user = new Discipline();
    assign(user, data, 2);
    return user;
  }


}
