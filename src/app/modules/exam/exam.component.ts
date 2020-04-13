import {Component, OnInit} from '@angular/core';
import {ExamService} from '../../global-services/exam/exam.service';

@Component({
  selector: 'app-exam',
  templateUrl: './exam.component.html',
  styleUrls: ['./exam.component.css']
})
export class ExamComponent implements OnInit {
  exam;

  constructor(private examService: ExamService) {
  }

  async ngOnInit() {
    this.exam = await this.examService.getExam();
  }

}
