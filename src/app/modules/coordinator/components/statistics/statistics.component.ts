import {Component, OnInit} from '@angular/core';
import {ClassService} from '../../services/class/class.service';
import {SessionService} from '../../../../global-services/session/session.service';
import {StudentService} from '../../../../global-services/student/student.service';
import {BackendService} from '../../../../global-services/backend/backend.service';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.css']
})
export class StatisticsComponent implements OnInit {

  counts;

  constructor(
    private classService: ClassService,
    private sessionService: SessionService,
    private studentService: StudentService,
    private backendService: BackendService
  ) { }

  ngOnInit(): void {

    this.init();
  }


  async init(){
    let classes = await this.classService.getAll();
    let students = await this.studentService.getAll();
    let grades: any[] = await this.backendService.getAll('grades');

    let courseClasses = classes
      .filter(v => v.course.name === this.sessionService.getSession().course.name);

    this.counts = courseClasses.map(v => {
      let classStudents = students
        .filter( s => s.class.name === v.name);

      let classGrades = grades.filter(g => classStudents.find(s => s._id === g.studentID));

      let result = classGrades.reduce((previousValue, currentValue) => {
        let mean = (currentValue.grades.g1 + currentValue.grades.g2 + currentValue.grades.g3) / 3.0;
        mean >= 7 ? previousValue.approved += 1 : previousValue.reproved += 1;
        return previousValue;
      }, {
        approved: 0,
        reproved: 0
      });

      return {
        class: v.name,
        result
      }
    });




  }

}
