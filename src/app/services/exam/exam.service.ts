import {Injectable} from '@angular/core';
import {Exam} from '../../models/Exam';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ExamService {

  constructor(private http: HttpClient) {

  }


  async getExam() {
    return this.http.get('api/getExam').toPromise();
  }

  async updateExam(exam: Exam) {

    let result: any = await this.http.post('api/updateExam', {exam: exam}).toPromise();

    return result.status === 'ok';

  }


}
