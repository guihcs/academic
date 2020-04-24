import { Injectable } from '@angular/core';
import {DataSource} from '../../../../global-models/DataSource';
import {BackendService} from '../../../../global-services/backend/backend.service';
import {ClassFormData} from '../../../../global-models/ClassFormData';
import {assign} from '../../../../utils/utils';
import {SessionService} from '../../../../global-services/session/session.service';
import {ClassDetails} from '../../../../global-models/ClassDetails';

@Injectable({
  providedIn: 'root'
})
export class ClassService implements DataSource{

  constructor(
    private backend: BackendService,
    private sessionService: SessionService
  ) { }

  async getAll(params) {
    return this.backend.getAll('classes');
  }

  async queryOne(params) {
    let rawData = await this.backend.query('classes', params);
    let class1 = new ClassDetails();
    assign(class1, rawData[0], 2);
    return class1;
  }

  async insert(data) {
    let classes = await this.backend.getAll('classes');
    if (classes.find(v => v.name === data.name)) return false;
    data.course = this.sessionService.getSession().course;
    await this.backend.persist('classes', data);

    return true;
  }

  async delete(data) {
    await this.backend.delete('classes', data._id);
    return true;
  }

  update(data) {
  }




}
