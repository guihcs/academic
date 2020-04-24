import { Injectable } from '@angular/core';
import {DataSource} from '../../../../global-models/DataSource';
import {BackendService} from '../../../../global-services/backend/backend.service';
import {SessionService} from '../../../../global-services/session/session.service';
import {assign} from '../../../../utils/utils';
import {DisciplineDetails} from '../../models/DisciplineDetails';

@Injectable({
  providedIn: 'root'
})
export class DisciplineService implements DataSource{

  constructor(
    private backendService: BackendService,
    private sessionService: SessionService
  ) { }

  delete(data) {
  }

  async getAll(params?) {
    let disciplines = await this.backendService.getAll('disciplines');
    return disciplines.filter(data => {
      return data.professor?.name === this.sessionService.getSession().name;
    });
  }

  insert(data, args?) {
  }

  async queryOne(params) {
    let rawData = await this.backendService.query('disciplines', params);
    let discipline = new DisciplineDetails();
    assign(discipline, rawData[0], 2);
    return discipline;
  }

  update(data) {
  }



}
