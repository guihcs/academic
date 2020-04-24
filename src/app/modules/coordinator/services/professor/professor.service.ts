import { Injectable } from '@angular/core';
import {BackendService} from '../../../../global-services/backend/backend.service';
import {assign} from '../../../../utils/utils';
import {UserProfile} from '../../../../global-models/user/UserProfile';
import {DataSource} from '../../../../global-models/DataSource';
import {ProfessorDetails} from '../../../../global-models/user/ProfessorDetails';
import {ProfessorFormData} from '../../../../global-models/user/ProfessorFormData';

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
      if (datum.type !== UserProfile.PROFESSOR) continue;
      let professor = new ProfessorDetails();
      assign(professor, datum, 2);
      professors.push(professor);
    }

    return professors;
  }

  async queryOne(params) {
    let rawData = await this.backendService.query('users', params);
    let professorDetails = new ProfessorDetails();
    professorDetails._id = params;
    assign(professorDetails, rawData[0], 2);
    return professorDetails;
  }

  async insert(data: ProfessorFormData) {

    await this.backendService.persist('users', data);
    return true;
  }

  async delete(data) {
    await this.backendService.delete('users', data._id);
    return true;
  }

  async update(data) {
    await this.backendService.update('users', data._id, data);
    return true;
  }



}
