import {Component, ComponentFactoryResolver, OnInit, ViewChild, ViewContainerRef} from '@angular/core';
import {SessionService} from '../../../../global-services/session/session.service';
import {DisciplineService} from '../../services/discipline/discipline.service';
import {StudentService} from '../../../../global-services/student/student.service';
import {ClassService} from '../../services/class/class.service';
import {BackendService} from '../../../../global-services/backend/backend.service';
import {GradeComponent} from '../grade/grade.component';
import {FormGroup} from '@angular/forms';

import {PDFService} from '../../../../global-services/pdf/pdf.service';
import {MatSnackBar, MatSnackBarConfig} from '@angular/material/snack-bar';


@Component({
  selector: 'app-student-grade',
  templateUrl: './student-grade.component.html',
  styleUrls: ['./student-grade.component.css']
})
export class StudentGradeComponent implements OnInit {

  students;
  data;

  @ViewChild('gradeContainer', {read: ViewContainerRef, static: true})
  gradeContainer: ViewContainerRef;

  formGroup = new FormGroup({});
  grades;

  constructor(
    private sessionService: SessionService,
    private disciplineService: DisciplineService,
    private studentService: StudentService,
    private classService: ClassService,
    private backendService: BackendService,
    private componentFactoryResolver: ComponentFactoryResolver,
    private pdfService: PDFService,
    private snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
    this.loadData();

  }


  async loadData(){
    let _class = await this.classService.queryOne(this.data.params.id);
    let students = await this.studentService.getAll();
    this.students = students.filter(c => c.class._id === _class._id);

    this.grades = await this.backendService.getAll('grades');

    for (const student of this.students) {
      let comp = this.gradeContainer.createComponent(
        this.componentFactoryResolver.resolveComponentFactory(GradeComponent)
      );

      comp.instance.setStudent(student);
      comp.instance.setGrade(this.grades.find(v => v.studentID === student._id));

      this.formGroup.addControl(student._id, comp.instance.getGroup());
    }




  }

  async updateGrades(){

    let formValues = this.formGroup.value;

    for (const id of Object.keys(formValues)) {

      if (this.grades){
        let g = this.grades.find(v => v.studentID === id);
        if (g){
          g.grades = formValues[id];
          await this.backendService.update('grades', g._id, g);
        }else {
          let grade = {
            studentID: id,
            discipline: '',
            grades: formValues[id]
          }
          await this.backendService.persist('grades', grade);
        }

      }else {
        let grade = {
          studentID: id,
          discipline: '',
          grades: formValues[id]
        }
        await this.backendService.persist('grades', grade);
      }

    }


    let config = new MatSnackBarConfig();
    config.panelClass = ['custom-class'];
    config.duration = 2000;
    this.snackBar.open('Grades Updated.', '', config);

  }

  generatePDF() {
    this.pdfService.start();

    this.pdfService.grid(['Aluno', 'n1', 'n2', 'n3', 'média', 'situação']);

    for (let grade of this.grades) {

      grade.grades.g1 = parseFloat(grade.grades.g1);
      grade.grades.g2 = parseFloat(grade.grades.g2);
      grade.grades.g3 = parseFloat(grade.grades.g3);

      let student = this.students.find(v => v._id === grade.studentID);
      let mean = (grade.grades.g1 + grade.grades.g2 + grade.grades.g3) / 3.0;


      let situation = 'Aprovado';
      if (mean < 4) {
        situation = 'Reprovado';
      }
      if (mean < 7) {
        situation = 'Recuperação';
      }

      let vals = [student.name, grade.grades.g1, grade.grades.g2, grade.grades.g3, mean.toFixed(1), situation];
      this.pdfService.grid(vals);
    }

    this.pdfService.open();
  }


}
