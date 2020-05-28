import {ChangeDetectorRef, Component, ComponentFactoryResolver, OnInit, ViewChild, ViewContainerRef} from '@angular/core';
import {SessionService} from '../../../../global-services/session/session.service';
import {DisciplineService} from '../../services/discipline/discipline.service';
import {StudentService} from '../../../../global-services/student/student.service';
import {ClassService} from '../../services/class/class.service';
import {BackendService} from '../../../../global-services/backend/backend.service';
import {GradeComponent} from '../grade/grade.component';
import {FormGroup} from '@angular/forms';
import {createLogErrorHandler} from '@angular/compiler-cli/ngcc/src/execution/tasks/completion';

import {PDFService} from '../../../../global-services/pdf/pdf.service';



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
    private pdfService: PDFService
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

    }

  }

  generatePDF(){
    this.pdfService.start();

    for (const grade of this.grades) {
      let student = this.students.find(v => v._id === grade.studentID);
      let vals = [student.name, grade.grades.g1, grade.grades.g2, grade.grades.g3];
      this.pdfService.grid(vals);
    }

    this.pdfService.save('Grades');
  }


  getData(){

  }
}
