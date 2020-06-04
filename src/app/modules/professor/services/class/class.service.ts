import {Injectable} from '@angular/core';
import {DataSource} from '../../../../global-models/DataSource';
import {BackendService} from '../../../../global-services/backend/backend.service';
import {SessionService} from '../../../../global-services/session/session.service';
import {assign} from '../../../../utils/utils';
import {ClassDetails} from '../../../../global-models/ClassDetails';

@Injectable({
  providedIn: 'root'
})
export class ClassService implements DataSource{

  constructor(
    private backendService: BackendService,
    private sessionService: SessionService
  ) { }

  delete(data) {
  }

  async getAll(params?) {
    let classes = await this.backendService.getAll('classes');
    let disciplines = await this.backendService.getAll('disciplines');

    disciplines = disciplines.filter(v => v.professor?.name === this.sessionService.getSession().name);

    let periods = disciplines.map(v => v.period);

    return classes.filter(v => periods.includes(v.period));
  }

  insert(data, args?) {
  }

  async queryOne(params) {
    let rawData = await this.backendService.query('classes', params);
    let _class = new ClassDetails();
    assign(_class, rawData[0], 2);
    return _class;
  }

  update(data) {
  }

  page(min, max) {
  }



}
