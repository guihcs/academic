import {Component, OnInit} from '@angular/core';
import {assign} from '../../../../utils/utils';
import {DisciplineFormData} from '../../../../global-models/DisciplineFormData';
import {SessionService} from '../../../../global-services/session/session.service';

@Component({
  selector: 'app-insert-subject',
  templateUrl: './insert-subject.component.html',
  styleUrls: ['./insert-subject.component.css']
})
export class InsertSubjectComponent implements OnInit {

  collectionName = 'users';
  pageTitle = 'Insert Discipline';
  dataType = DisciplineFormData;
  course;

  constructor(private sessionService: SessionService) {
  }

  ngOnInit(): void {
    this.course = this.sessionService.getSession().course;
  }

  async prepareSubjectData(data, injectedData) {
    data.course = injectedData;
    let user = new DisciplineFormData();
    assign(user, data, 2);
    return user;
  }


}
