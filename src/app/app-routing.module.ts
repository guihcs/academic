import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {path: 'admin', loadChildren: () => import('./modules/admin/admin.module').then(m => m.AdminModule)},
  {path: 'coordinator', loadChildren: () => import('./modules/coordinator/coordinator.module').then(m => m.CoordinatorModule)},
  {path: 'professor', loadChildren: () => import('./modules/professor/professor.module').then(m => m.ProfessorModule)},
  {path: 'student', loadChildren: () => import('./modules/student/student.module').then(m => m.StudentModule)},
  {path: 'login', loadChildren: () => import('./modules/login/login.module').then(m => m.LoginModule)},
  {path: 'exam', loadChildren: () => import('./modules/exam/exam.module').then(m => m.ExamModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
