import { Injectable } from '@angular/core';
import {BackendService} from '../backend/backend.service';
import {UserProfile} from '../../global-models/user/UserProfile';
import {StudentFormData} from '../../global-models/user/Student';
import {assign} from '../../utils/utils';
import {DataSource} from '../../global-models/DataSource';
import {SessionService} from '../session/session.service';
import {ProfessorFormData} from '../../global-models/user/ProfessorFormData';
import {StudentDetails} from '../../global-models/user/StudentDetails';

@Injectable({
  providedIn: 'root'
})
export class StudentService implements DataSource {

  constructor(
    private backendService: BackendService,
    private sessionService: SessionService
  ) {
  }


  async getAll(){
    let all = await this.backendService.getAll('users');
    let students = [];
    for (const userData of all) {
      if (userData.type === UserProfile.STUDENT){
        let student = new StudentDetails();
        assign(student, userData, 2);

        if(student.code) student.image = await this.backendService.download(student.code);

        students.push(student);
      }
    }

    if (this.sessionService.getSession().course)
      students = students.filter(s => s.class?.course?.name === this.sessionService.getSession().course?.name);

    return students;
  }


  async queryStudent(id){
    let rawData = await this.backendService.query('users', id);
    let student = new StudentDetails();
    assign(student, rawData[0], 2);
    if(student.code) student.image = await this.backendService.download(student.code);
    return student;
  }

  async queryOne(params) {
    return this.queryStudent(params);
  }

  async insert(data, image) {
    delete data.class.course.coordinator;
    data.code = StudentService.generateStudentCode();
    data.active = true;
    await this.backendService.persist('users', data);
    await this.backendService.upload(data.code, image);
    return true;
  }

  private static generateStudentCode(){
    let date = new Date();

    let year = date.getFullYear();
    let semester = date.getMonth() < 6 ? 1 : 2;
    let salt = Math.floor(Math.random() * 100 % 100).toString().padStart(2, '0');
    let millis = date.getMilliseconds().toString().padStart(3, '0');

    return [year, semester, salt, millis].join('');
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
