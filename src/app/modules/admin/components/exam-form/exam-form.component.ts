import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {MatSnackBar} from '@angular/material/snack-bar';
import {Exam} from '../../../../global-models/Exam';
import {ExamService} from '../../../../global-services/exam/exam.service';

@Component({
  selector: 'app-exam-form',
  templateUrl: './exam-form.component.html',
  styleUrls: ['./exam-form.component.css']
})
export class ExamFormComponent implements OnInit, AfterViewInit {

  @ViewChild('dynamicForm') dynamicForm;
  examID;
  formDescriptor: BehaviorSubject<Exam> = new BehaviorSubject<Exam>(new Exam());

  constructor(private examService: ExamService,
              private snackBar: MatSnackBar
  ) {
  }

  ngOnInit(): void {
  }

  async ngAfterViewInit() {
    this.getExamData();
  }


  async getExamData() {
    let exam = await this.examService.getExam();
    if (exam){
      this.examID = exam._id;
      this.formDescriptor.next(exam);

    }else {

    }

  }

  async updateExam() {
    let exam = this.dynamicForm.getResult();
    if (this.examID) {
      exam['_id'] = this.examID;
    }
    if (await this.examService.updateExam(exam)) {
      this.getExamData();
      this.snackBar.open('Exam Updated.', '', {
        duration: 2000
      });
    } else {
      this.snackBar.open('Error', '', {
        duration: 2000
      });
    }
  }

}
