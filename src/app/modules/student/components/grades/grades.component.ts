import { Component, OnInit } from '@angular/core';
import {BackendService} from '../../../../global-services/backend/backend.service';
import {verifyHostBindings} from '@angular/compiler';
import {SessionService} from '../../../../global-services/session/session.service';

@Component({
  selector: 'app-grades',
  templateUrl: './grades.component.html',
  styleUrls: ['./grades.component.css']
})
export class GradesComponent implements OnInit {

  grades;

  constructor(
    private backendService: BackendService,
    private sessionService: SessionService
  ) { }

  ngOnInit(): void {
    this.backendService.getAll('grades').then(v => {
      this.grades = v.filter(g => g.studentID === this.sessionService.getSession()._id);
    });
  }

}
