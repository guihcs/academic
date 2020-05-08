import {Component, OnInit} from '@angular/core';
import {StudentService} from '../../../../global-services/student/student.service';
import {ConfigurableInput} from '../../../../libs/dynamic-forms/models/configurable-input';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-class-students',
  templateUrl: './class-students.component.html',
  styleUrls: ['./class-students.component.css'],
})
export class ClassStudentsComponent implements OnInit, ConfigurableInput {

  formControl = new FormControl();
  students;

  constructor(
    private studentService: StudentService
  ) { }

  ngOnInit(): void {
  }

  applyArguments(args) {

    if (args.defaultValue){
      this.studentService.getAll().then(v => {
        this.students = v.filter(c => c.class._id === args.defaultValue);
      });
    }
  }

  getFormControl() {
    return this.formControl;
  }




}
