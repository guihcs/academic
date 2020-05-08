import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AuthGuard} from './global-guards/auth.guard';


const routes: Routes = [
  {
    path: '',
    canActivate: [AuthGuard],
    loadChildren: () => import('./modules/login/login.module').then(m => m.LoginModule)
  },
  {
    path: 'admin',
    canActivate: [AuthGuard],
    loadChildren: () => import('./modules/admin/admin.module').then(m => m.AdminModule)
  },
  {
    path: 'coordinator',
    canActivate: [AuthGuard],
    loadChildren: () => import('./modules/coordinator/coordinator.module').then(m => m.CoordinatorModule)
  },
  {
    path: 'professor',
    canActivate: [AuthGuard],
    loadChildren: () => import('./modules/professor/professor.module').then(m => m.ProfessorModule)
  },
  {
    path: 'student',
    canActivate: [AuthGuard],
    loadChildren: () => import('./modules/student/student.module').then(m => m.StudentModule)
  },
  {
    path: 'login',
    canActivate: [AuthGuard],
    loadChildren: () => import('./modules/login/login.module').then(m => m.LoginModule)
  },
  {
    path: 'exam',
    loadChildren: () => import('./modules/exam/exam.module').then(m => m.ExamModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
