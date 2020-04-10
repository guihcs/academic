import {Component, OnInit, ViewChild} from '@angular/core';
import {DynamicFormsComponent} from '../../../../libs/dynamic-forms/dynamic-forms.component';
import {BehaviorSubject} from 'rxjs';
import {CourseService} from '../../../../global-services/course/course.service';
import {Course} from '../../../../global-models/Course';

@Component({
  selector: 'app-create-course',
  templateUrl: './create-course.component.html',
  styleUrls: ['./create-course.component.css']
})
export class CreateCourseComponent implements OnInit {

  @ViewChild('courseForm')
  courseForm: DynamicFormsComponent;
  courseObservable: BehaviorSubject<Course> = new BehaviorSubject<Course>(new Course());

  constructor(private courseService: CourseService) {
  }

  ngOnInit(): void {
  }

  isValid() {
    return true;
  }

  createCourse() {
    this.courseService.addCourse(this.courseForm.getResult());
  }
}
