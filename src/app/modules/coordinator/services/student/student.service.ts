import { Injectable } from '@angular/core';
import {BackendService} from '../../../../global-services/backend/backend.service';
import {UserType} from '../../../../global-models/UserType';
import {Student} from '../../../../global-models/Student';
import {assign} from '../../../../utils/utils';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(
    private backend: BackendService
  ) { }


  async getAll(course){
    let all = await this.backend.getAll('users');

    let students = [];
    for (const userData of all) {
      if (userData.type === UserType.STUDENT && userData.class.course.name === course.name){
        let student = new Student();
        assign(student, userData, 2);
        students.push(student);
      }
    }

    return students;
  }
}
