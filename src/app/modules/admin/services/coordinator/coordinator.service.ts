import { Injectable } from '@angular/core';
import {BackendService} from '../../../../global-services/backend/backend.service';

@Injectable({
  providedIn: 'root'
})
export class CoordinatorService {

  constructor(
    private backend: BackendService
  ) { }


  async save(coordinator){
    await this.backend.persist('users', coordinator);
    let courses = await this.backend.getAll('courses');
    let course = courses.find(v => v.name === coordinator.course.name);
    await this.backend.update('courses', course._id, {
      coordinator: {
        name: coordinator.name
      }
    });
    return true;
  }
}
