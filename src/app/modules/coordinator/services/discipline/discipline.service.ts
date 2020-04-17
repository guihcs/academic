import { Injectable } from '@angular/core';
import {DataSource} from '../../../../global-models/DataSource';
import {BackendService} from '../../../../global-services/backend/backend.service';
import {DisciplineDetails} from '../../../../global-models/DisciplineDetails';
import {assign} from '../../../../utils/utils';
import {map} from 'rxjs/operators';
import {Discipline} from '../../../../global-models/Discipline';

@Injectable({
  providedIn: 'root'
})
export class DisciplineService implements DataSource{

  constructor(
    private backend: BackendService
  ) { }

  async getAll(params) {
    let data = await this.backend.getAll('subjects');

    data = data.map(v => {

      let discipline = new Discipline();
      assign(discipline, v, 2);
      return discipline;
    });

    return data;

  }

  async queryOne(params) {
    let rawData = await this.backend.query('subjects', params);
    let discipline = new DisciplineDetails();
    assign(discipline, rawData[0], 2);
    return discipline;
  }



}
