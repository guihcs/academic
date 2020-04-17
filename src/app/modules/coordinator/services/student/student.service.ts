import { Injectable } from '@angular/core';
import {BackendService} from '../../../../global-services/backend/backend.service';
import {UserType} from '../../../../global-models/UserType';
import {Student} from '../../../../global-models/Student';
import {assign} from '../../../../utils/utils';
import {DataSource} from '../../../../global-models/DataSource';
import {SessionService} from '../../../../global-services/session/session.service';

@Injectable({
  providedIn: 'root'
})
export class StudentService implements DataSource{

  constructor(
    private backend: BackendService,
    private sessionService: SessionService
  ) { }


  async getAll(){
    let all = await this.backend.getAll('users');

    let students = [];
    for (const userData of all) {
      if (userData.type === UserType.STUDENT && userData.class.course.name === this.sessionService.getSession().course.name){
        let student = new Student();
        assign(student, userData, 2);
        students.push(student);
      }
    }

    return students;
  }


  async queryStudent(id){

    let rawData = await this.backend.query('users', id);
    let student = new Student();
    student._id = id;
    assign(student, rawData[0], 2);
    return student;
  }

  async queryOne(params) {
    return this.queryStudent(params);
  }



}
