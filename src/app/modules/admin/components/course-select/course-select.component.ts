import {Component, OnInit} from '@angular/core';
import {ConfigurableInput} from '@guihss/ngx-dynamic-forms';
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
  defaultValue;


  constructor(
    private backend: BackendService
  ) { }

  ngOnInit(): void {

    this.backend.getAll('courses').then(courses => {
      this.courses = courses;

      if (this.defaultValue){
        this.formControl.setValue(this.courses.find(v => v.name === this.defaultValue.name));
      }
    });


  }

  applyArguments(args) {
    this.args = args;
    if (args.defaultValue){
      this.defaultValue = args.defaultValue;
      if (this.courses){
        this.formControl.setValue(this.courses.find(v => v.name === this.defaultValue.name));
      }
    }
  }

  getFormControl() {
    return this.formControl;
  }




}
