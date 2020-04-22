import { Injectable } from '@angular/core';
import {DataSource} from '../../../../global-models/DataSource';
import {BackendService} from '../../../../global-services/backend/backend.service';
import {SessionService} from '../../../../global-services/session/session.service';

@Injectable({
  providedIn: 'root'
})
export class CourseService implements DataSource{

  constructor(
    private backend: BackendService,
    private sessionService: SessionService
  ) { }

  getAll(params) {
  }

  queryOne(params) {
    return this.sessionService.getSession().course;
  }

  insert(data) {
  }

  delete(data) {
  }

  update(data) {
  }



}
