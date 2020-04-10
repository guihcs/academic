import { Component, OnInit } from '@angular/core';
import {ConfigurableInput} from '../../../../libs/dynamic-forms/models/configurable-input';
import {FormControl} from '@angular/forms';
import {BackendService} from '../../../../global-services/backend/backend.service';

@Component({
  selector: 'app-course-select',
  templateUrl: './course-select.component.html',
  styleUrls: ['./course-select.component.css']
})
export class CourseSelectComponent implements OnInit, ConfigurableInput{

  args;
  courses;

  formControl = new FormControl();
  control = new FormControl();

  constructor(
    private backend: BackendService
  ) { }

  ngOnInit(): void {
    this.formControl.valueChanges.subscribe( v => {
      this.control.setValue(this.courses.filter(c => c.name === v)[0]);
    });
    this.backend.getAll('courses').then(courses => {
      this.courses = courses;
    });
  }

  applyArguments(args) {
    this.args = args;

    if (args.defaultValue){
      this.formControl.setValue(args.defaultValue.name);
    }


  }

  getFormControl() {
    return this.control;
  }




}
