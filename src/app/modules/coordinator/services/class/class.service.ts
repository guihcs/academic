import { Injectable } from '@angular/core';
import {DataSource} from '../../../../global-models/DataSource';
import {BackendService} from '../../../../global-services/backend/backend.service';
import {Class} from '../../../../global-models/Class';
import {assign} from '../../../../utils/utils';

@Injectable({
  providedIn: 'root'
})
export class ClassService implements DataSource{

  constructor(
    private backend: BackendService
  ) { }

  async getAll(params) {
    return this.backend.getAll('classes');
  }

  async queryOne(params) {
    let rawData = await this.backend.query('classes', params);
    let class1 = new Class();
    assign(class1, rawData[0], 2);
    return class1;
  }



}
