import {Component, OnInit} from '@angular/core';
import {StudentService} from '../../../../global-services/student/student.service';
import {ClassService} from '../../services/class/class.service';

@Component({
  selector: 'app-class-students',
  templateUrl: './class-students.component.html',
  styleUrls: ['./class-students.component.css'],
})
export class ClassStudentsComponent implements OnInit {

  students;
  data;

  constructor(
    private studentService: StudentService,
    private classService: ClassService
  ) { }

  ngOnInit(): void {
    this.loadData();
  }


  async loadData(){
    let _class = await this.classService.queryOne(this.data.params.id);
    let students = await this.studentService.getAll();
    this.students = students.filter(c => c.class._id === _class._id);
  }

  getData(){

  }



}
