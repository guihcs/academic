import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CoordinatorComponent} from './coordinator.component';
import {DetailsProfessorComponent} from './components/details-professor/details-professor.component';
import {DetailsStudentComponent} from './components/details-student/details-student.component';
import {DetailsSubjectComponent} from './components/details-subject/details-subject.component';
import {ViewProfessorComponent} from './components/view-professor/view-professor.component';
import {ViewStudentComponent} from './components/view-student/view-student.component';
import {ViewSubjectComponent} from './components/view-subject/view-subject.component';
import {InsertProfessorComponent} from './components/insert-professor/insert-professor.component';
import {InsertStudentComponent} from './components/insert-student/insert-student.component';
import {InsertSubjectComponent} from './components/insert-subject/insert-subject.component';
import {DetailsClassComponent} from './components/details-class/details-class.component';
import {ViewClassComponent} from './components/view-class/view-class.component';
import {InsertClassComponent} from './components/insert-class/insert-class.component';
import {Student} from '../../global-models/Student';
import {DetailsCourseComponent} from './components/details-course/details-course.component';


const routes: Routes = [
  {
    path: '',
    component: CoordinatorComponent,
    children: [
      {path: 'details/professor/:id', component: DetailsProfessorComponent},
      {path: 'details/student/:id', component: DetailsStudentComponent},
      {path: 'details/subject/:id', component: DetailsSubjectComponent},
      {path: 'details/class/:id', component: DetailsClassComponent},
      {path: 'details/course', component: DetailsCourseComponent},
      {path: 'view/professor', component: ViewProfessorComponent},
      {path: 'view/student', component: ViewStudentComponent},
      {path: 'view/subject', component: ViewSubjectComponent},
      {path: 'view/class', component: ViewClassComponent},
      {path: 'insert/professor', component: InsertProfessorComponent},
      {path: 'insert/student', component: InsertStudentComponent},
      {path: 'insert/subject', component: InsertSubjectComponent},
      {path: 'insert/class', component: InsertClassComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoordinatorRoutingModule { }
