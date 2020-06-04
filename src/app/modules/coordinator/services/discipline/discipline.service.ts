import {Injectable} from '@angular/core';
import {DataSource} from '../../../../global-models/DataSource';
import {BackendService} from '../../../../global-services/backend/backend.service';
import {DisciplineDetails} from '../../../../global-models/DisciplineDetails';
import {assign} from '../../../../utils/utils';
import {SessionService} from '../../../../global-services/session/session.service';

@Injectable({
  providedIn: 'root'
})
export class DisciplineService implements DataSource{

  constructor(
    private backend: BackendService,
    private sessionService: SessionService
  ) { }

  async getAll() {
    let data = await this.backend.getAll('disciplines');

    data = data.map(v => {

      let discipline = new DisciplineDetails();
      assign(discipline, v, 2);
      return discipline;
    });

    return data;

  }

  async queryOne(params) {
    let rawData = await this.backend.query('disciplines', params);
    let discipline = new DisciplineDetails();
    assign(discipline, rawData[0], 2);
    return discipline;
  }

  async insert(data) {

    data.course = this.sessionService.getSession()?.course;
    await this.backend.persist('disciplines', data);
    return true;
  }

  async delete(data) {
    await this.backend.delete('disciplines', data._id);
    return true;
  }

  async update(data) {

    await this.backend.update('disciplines', data._id, data);

    return true;
  }

  page(min, max) {
  }




}
