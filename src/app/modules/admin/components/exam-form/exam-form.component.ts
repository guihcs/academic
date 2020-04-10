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
  isLoading = true;
  examID;
  formDescriptor: BehaviorSubject<Exam> = new BehaviorSubject<Exam>(null);

  constructor(private examService: ExamService,
              private snackBar: MatSnackBar
  ) {
  }

  ngOnInit(): void {
  }

  async ngAfterViewInit() {
    this.isLoading = true;
    this.getExamData();
  }


  async getExamData() {
    let exam = await this.examService.getExam();
    this.examID = exam._id;
    this.formDescriptor.next(exam);
    this.isLoading = false;
  }

  async updateExam() {
    let exam = this.dynamicForm.getResult();
    if (this.examID) {
      exam['_id'] = this.examID;
    }
    if (await this.examService.updateExam(exam)) {

      this.isLoading = true;
      this.getExamData();
      this.snackBar.open('Exam Updated', '', {
        duration: 2000
      });
    } else {
      this.snackBar.open('Error', '', {
        duration: 2000
      });
    }
  }

}
