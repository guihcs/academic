import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from './pages/login/login.component';
import {ExamComponent} from './pages/exam/exam.component';


const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'exam', component: ExamComponent},
  {path: '', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
