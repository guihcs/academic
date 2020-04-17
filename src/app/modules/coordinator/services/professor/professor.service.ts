import { Injectable } from '@angular/core';
import {BackendService} from '../../../../global-services/backend/backend.service';
import {Professor} from '../../../../global-models/Professor';
import {assign} from '../../../../utils/utils';
import {UserType} from '../../../../global-models/UserType';
import {ViewProfessor} from '../../../../global-models/ViewProfessor';
import {DataSource} from '../../../../global-models/DataSource';
import {Student} from '../../../../global-models/Student';

@Injectable({
  providedIn: 'root'
})
export class ProfessorService implements DataSource{

  constructor(
    private backendService: BackendService
  ) { }


  async getAll(){
    let data = await this.backendService.getAll('users');
    let professors = [];

    for (const datum of data) {
      if (datum.type !== UserType.PROFESSOR) continue;
      let professor = new ViewProfessor();
      assign(professor, datum, 2);
      professors.push(professor);
    }

    return professors;
  }

  async queryOne(params) {
    let rawData = await this.backendService.query('users', params);
    let student = new Professor();
    student._id = params;
    assign(student, rawData[0], 2);
    return student;
  }


}
