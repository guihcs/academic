import { Injectable } from '@angular/core';
import {BackendService} from '../../../../global-services/backend/backend.service';
import {DataSource} from '../../../../global-models/DataSource';
import {UserFormData} from '../../../../global-models/user/UserFormData';
import {UserDetails} from '../../../../global-models/user/UserDetails';
import {assign} from '../../../../utils/utils';
import {Admin} from '../../../../global-models/user/Admin';
import {CoordinatorDetails} from '../../../../global-models/user/CoordinatorDetails';
import {ProfessorDetails} from '../../../../global-models/user/ProfessorDetails';
import {StudentDetails} from '../../../../global-models/user/StudentDetails';

@Injectable({
  providedIn: 'root'
})
export class UserService implements DataSource {

  detailsTypeMap = {
    0: Admin,
    1: CoordinatorDetails,
    2: ProfessorDetails,
    3: StudentDetails
  };


  constructor(
    private backendService: BackendService
  ) { }

  async getAll(params) {
    let users = await this.backendService.getAll('users');

    return users.map(v => {
      let user = new this.detailsTypeMap[v.type]();
      assign(user, v, 2);

      return user;
    });
  }

  async queryOne(params) {
    let result = await this.backendService.query('users', params);
    let data = result[0];

    let user = new this.detailsTypeMap[data.type]();
    assign(user, data, 3);
    return user;
  }

  async delete(data) {
    return await this.backendService.delete('users', data._id);
  }

  async insert(data) {
    return await this.backendService.persist('users', data);
  }

  async update(data){
    //todo user type is being saved with data
    return await this.backendService.update('users', data._id, data);
  }

}
