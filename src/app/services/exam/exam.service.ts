import {Injectable} from '@angular/core';
import {Exam} from '../../models/Exam';

@Injectable({
  providedIn: 'root'
})
export class ExamService {

  exam: Exam;

  constructor() {
    const exam = new Exam();
    exam.date = new Date(2019, 3, 16).toISOString();
    exam.local = 'Fafe';
    exam.courses = ['Mat', 'Port', 'Hue', 'BR'];
    this.exam = exam;
  }


  getExam() {
    return this.exam;
  }

  updateExam(exam: Exam) {
    this.exam = exam;
  }


}
