import {Injectable} from '@angular/core';
import {Exam} from '../../models/Exam';
import {HttpClient} from '@angular/common/http';
import {assign} from '../../../../utils/utils';

@Injectable({
  providedIn: 'root'
})
export class ExamService {

  constructor(private http: HttpClient) {

  }

  async getExam() {
    let examData = await this.http.get('api/getExam').toPromise();
    let exam = new Exam();
    assign(exam, examData, 1);
    return exam;
  }

  async updateExam(exam: Exam) {
    let result: any = await this.http.post('api/updateExam', {exam: exam}).toPromise();
    return result.status === 'ok';
  }


}
