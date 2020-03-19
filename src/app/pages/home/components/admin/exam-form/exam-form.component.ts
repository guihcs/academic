import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {ExamFormDescriptor} from '../../../../../models/Exam';
import {ExamService} from '../../../../../services/exam/exam.service';

@Component({
  selector: 'app-exam-form',
  templateUrl: './exam-form.component.html',
  styleUrls: ['./exam-form.component.css']
})
export class ExamFormComponent implements OnInit, AfterViewInit {

  @ViewChild('dynamicForm') dynamicForm;
  formDescriptor = new ExamFormDescriptor();
  isLoading = true;
  examID;

  constructor(private examService: ExamService) {
  }

  ngOnInit(): void {
  }

  async ngAfterViewInit() {
    this.isLoading = true;
    this.getExamData();
  }


  async getExamData() {
    let exam = await this.examService.getExam();

    if (exam) {

      if (exam['_id']) {
        this.examID = exam['_id'];
      }
      for (const key of Object.keys(exam)) {
        if (typeof exam[key] === 'object') {

          for (const key1 of Object.keys(exam[key])) {
            if (this.formDescriptor.hasOwnProperty(key)) {
              this.formDescriptor[key].default = exam[key][key1];
            }
          }
        } else {
          if (this.formDescriptor.hasOwnProperty(key)) {
            this.formDescriptor[key].default = exam[key];
          }
        }
      }

    }
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
    }
  }

}
