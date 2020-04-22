import { Injectable } from '@angular/core';
import {BackendService} from '../../../../global-services/backend/backend.service';
import {DataSource} from '../../../../global-models/DataSource';
import {UserProfile} from '../../../../global-models/user/UserProfile';
import {CoordinatorFormData} from '../../../../global-models/user/CoordinatorFormData';
import {assign} from '../../../../utils/utils';
import {CoordinatorDetails} from '../../../../global-models/user/CoordinatorDetails';

@Injectable({
  providedIn: 'root'
})
export class CoordinatorService implements DataSource {

  constructor(
    private backend: BackendService
  ) { }

  async delete(data) {
    if (data.course){
      await this.backend.update('courses', data.course._id, {
        coordinator: null
      });
    }

    await this.backend.delete('users', data._id);

    return true;
  }

  async getAll(params?) {
    let all = await this.backend.getAll('users');

    return all
      .filter(v => v.type === UserProfile.COORDINATOR)
      .map(v => {
        let coordinator = new CoordinatorDetails();
        assign(coordinator, v, 2);
        return coordinator;
    });
  }

  async insert(data, args?) {

    await this.backend.persist('users', data);
    if (data.course){
      let user = (await this.backend.getAll('users')).find(v => v.cpf === data.cpf);

      let courses = await this.backend.getAll('courses');
      let course = courses.find(v => v.name === data.course.name);
      await this.backend.update('courses', course._id, {
        coordinator: {
          id: user._id,
          name: data.name
        }
      });
    }

    return true;
  }

  async queryOne(params) {

    return (await this.getAll()).find(v => v._id === params);
  }

  async update(data) {

    await this.backend.update('users', data._id, data);

    if (data.course){
      await this.backend.update('courses', data.course._id, {
        coordinator: {
          id: data._id,
          name: data.name
        }
      });

    }

    return true;
  }




}
