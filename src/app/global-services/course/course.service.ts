import {Injectable} from '@angular/core';
import {BackendService} from '../backend/backend.service';
import {CourseFormData} from '../../global-models/CourseFormData';
import {assign} from '../../utils/utils';
import {DataSource} from '../../global-models/DataSource';
import {CourseDetails} from '../../global-models/CourseDetails';

@Injectable({
  providedIn: 'root'
})
export class CourseService implements DataSource{

  constructor(
    private backend: BackendService
  ) { }

  async getAll(params) {
    let courses = await this.backend.getAll('courses');

    return courses.map(v => {
      let course = new CourseDetails();
      assign(course, v, 3);
      return course;
    });
  }

  async queryOne(params) {
    let rawData = await this.backend.query('courses', params);
    let class1 = new CourseDetails();
    assign(class1, rawData[0], 2);
    return class1;
  }

  async delete(data) {
    await this.backend.delete('courses', data._id);
    return true;
  }

  async insert(data: CourseFormData) {
    await this.backend.persist('courses', data);
    return true;
  }

  async update(course) {
    await this.backend.update('courses', course._id, course);
    if (course.coordinator){
      await this.backend.update('users', course.coordinator.id, {
        course: {
          id: course._id,
          name: course.name
        }
      });
    }

    return true;
  }

  page(min, max) {
  }

}
