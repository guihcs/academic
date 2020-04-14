import { Component, OnInit } from '@angular/core';
import {BackendService} from '../../../../global-services/backend/backend.service';
import {SessionService} from '../../../../global-services/session/session.service';

@Component({
  selector: 'app-details-course',
  templateUrl: './details-course.component.html',
  styleUrls: ['./details-course.component.css']
})
export class DetailsCourseComponent implements OnInit {

  course;

  constructor(
    private backend: BackendService,
    private sessionService: SessionService
  ) { }

  ngOnInit(): void {
    this.course = this.sessionService.getSession().course;

  }

}
