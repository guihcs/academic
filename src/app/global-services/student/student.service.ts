import {Injectable} from '@angular/core';
import {BackendService} from '../backend/backend.service';
import {UserProfile} from '../../global-models/user/UserProfile';
import {assign} from '../../utils/utils';
import {DataSource} from '../../global-models/DataSource';
import {SessionService} from '../session/session.service';
import {StudentDetails} from '../../global-models/user/StudentDetails';
import {DisciplineService} from '../../modules/coordinator/services/discipline/discipline.service';
import {FileService} from '../file/file.service';

@Injectable({
  providedIn: 'root'
})
export class StudentService implements DataSource {

  constructor(
    private fileService: FileService,
    private backendService: BackendService,
    private sessionService: SessionService,
    private disciplineService: DisciplineService
  ) {
  }


  async getAll(){
    let all = await this.backendService.getAll('users');
    let students = [];
    let files = await this.fileService.getAll();


    for (const userData of all) {
      if (userData.type === UserProfile.STUDENT){
        let student = new StudentDetails();
        assign(student, userData, 2);
        if(student.code){
          let imageFile = files.find(f => f.metadata?.misc?.code === student.code);

          if(imageFile){
            let imageData = await this.fileService.download(imageFile);
            let reader = new FileReader();

            reader.readAsDataURL(imageData);
            student.image = await new Promise((resolve, reject) => {
              reader.onload = (_event) => {
                resolve(reader.result);
              }
            });

          }

        }
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
    if(student.code) student.image = await this.backendService.downloadImage(student.code);
    return student;
  }

  async queryOne(params) {
    return this.queryStudent(params);
  }

  async insert(studentData, imageFile) {

    if(!studentData.disciplines){
      let disciplines = await this.disciplineService.getAll();
      studentData.disciplines = disciplines.filter(d => d.period === studentData.class.period);
    }
    delete studentData.class.course.coordinator;
    studentData.code = StudentService.generateStudentCode();
    studentData.active = true;

    await this.backendService.nsign(studentData);

    if (imageFile){
      await this.fileService.upload(imageFile, {
        code: studentData.code
      });
    }


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
    await this.backendService.delete('users', data.profile._id);
    return true;
  }

  async update(data) {
    let studentData = data.profile;
    studentData.disciplines = data.disciplines;
    await this.backendService.update('users', studentData._id, studentData);
    return true;
  }

  page(min, max) {
  }



}
