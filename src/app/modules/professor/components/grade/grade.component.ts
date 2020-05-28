import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';

declare const Buffer;

@Component({
  selector: 'app-grade',
  templateUrl: './grade.component.html',
  styleUrls: ['./grade.component.css']
})
export class GradeComponent implements OnInit {

  student;
  g1 = new FormControl(0);
  g2 = new FormControl(0);
  g3 = new FormControl(0);
  group = new FormGroup({
    g1: this.g1,
    g2: this.g2,
    g3: this.g3,
  });

  constructor() { }

  ngOnInit(): void {
  }

  setStudent(student){
    this.student = student;
  }

  setGrade(grade){
    this.g1.setValue(grade.grades.g1);
    this.g2.setValue(grade.grades.g2);
    this.g3.setValue(grade.grades.g3);
  }

  mean(){
    return (parseFloat(this.g1.value) + parseFloat(this.g2.value) + parseFloat(this.g3.value)) / 3.0;
  }
  situation(){
    return 'none';
  }

  getGroup(){
    return this.group;
  }
}
