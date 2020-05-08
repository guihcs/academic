import { Injectable } from '@angular/core';
import {DataSource} from '../../../../global-models/DataSource';
import {BackendService} from '../../../../global-services/backend/backend.service';
import {assign} from '../../../../utils/utils';
import {SessionService} from '../../../../global-services/session/session.service';
import {ClassDetails} from '../../../../global-models/ClassDetails';

@Injectable({
  providedIn: 'root'
})
export class ClassService implements DataSource{

  constructor(
    private backendService: BackendService,
    private sessionService: SessionService
  ) { }

  async getAll() {
    return (await this.backendService.getAll('classes')).map(v => {
      let c = new ClassDetails();
      assign(c, v, 2);
      return c;
    });
  }

  async queryOne(params) {
    let rawData = await this.backendService.query('classes', params);
    let class1 = new ClassDetails();
    assign(class1, rawData[0], 3);
    return class1;
  }

  async insert(data) {
    let classes = await this.backendService.getAll('classes');
    if (classes.find(v => v.name === data.name)) return false;
    data.course = this.sessionService.getSession().course;
    await this.backendService.persist('classes', data);

    return true;
  }

  async delete(data) {
    await this.backendService.delete('classes', data._id);
    return true;
  }

  async update(data) {
    await this.backendService.update('classes', data._id, data);
    return true;
  }




}
