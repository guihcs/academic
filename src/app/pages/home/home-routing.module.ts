import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './home.component';
import {CoordinatorFormComponent} from './components/admin/coordinator-form/coordinator-form.component';
import {CoordinatorViewComponent} from './components/admin/coordinator-view/coordinator-view.component';
import {ProfileComponent} from './components/profile/profile.component';
import {CoordinatorDetailsComponent} from './components/admin/coordinator-details/coordinator-details.component';
import {ProfessorFormComponent} from './components/coordinator/professor-form/professor-form.component';
import {StudentFormComponent} from './components/coordinator/student-form/student-form.component';
import {ProfessorViewComponent} from './components/coordinator/professor-view/professor-view.component';
import {StudentViewComponent} from './components/coordinator/student-view/student-view.component';
import {ProfessorDetailsComponent} from './components/coordinator/professor-details/professor-details.component';
import {StudentDetailsComponent} from './components/coordinator/student-details/student-details.component';
import {ExamFormComponent} from './components/admin/exam-form/exam-form.component';


const routes: Routes = [
  {
    path: 'home', component: HomeComponent,
    children: [
      {path: 'insertCoordinator', component: CoordinatorFormComponent},
      {path: 'insertProfessor', component: ProfessorFormComponent},
      {path: 'insertStudent', component: StudentFormComponent},
      {path: 'coordinatorView', component: CoordinatorViewComponent},
      {path: 'professorView', component: ProfessorViewComponent},
      {path: 'studentView', component: StudentViewComponent},
      {path: 'profile', component: ProfileComponent},
      {path: 'details/coordinator/:id', component: CoordinatorDetailsComponent},
      {path: 'details/professor/:id', component: ProfessorDetailsComponent},
      {path: 'details/student/:id', component: StudentDetailsComponent},
      {path: 'examForm', component: ExamFormComponent}
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class HomeRoutingModule { }
