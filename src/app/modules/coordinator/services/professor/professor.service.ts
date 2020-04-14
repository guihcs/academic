import { Injectable } from '@angular/core';
import {BackendService} from '../../../../global-services/backend/backend.service';
import {Professor} from '../../../../global-models/Professor';
import {assign} from '../../../../utils/utils';
import {UserType} from '../../../../global-models/UserType';
import {ViewProfessor} from '../../../../global-models/ViewProfessor';

@Injectable({
  providedIn: 'root'
})
export class ProfessorService {

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
}
