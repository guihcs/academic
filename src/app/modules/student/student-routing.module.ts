import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {StudentComponent} from './student.component';
import {ProfileComponent} from '../../templates/profile/profile.component';


const routes: Routes = [
  {
    path: '',
    component: StudentComponent,
    children: [
      {path: 'profile', component: ProfileComponent},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentRoutingModule { }
