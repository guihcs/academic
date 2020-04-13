import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ProfessorComponent} from './professor.component';
import {ViewClassComponent} from './components/view-class/view-class.component';


const routes: Routes = [
  {
    path: '',
    component: ProfessorComponent,
    children: [
      {path: 'view/class', component: ViewClassComponent}
    ]
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfessorRoutingModule { }
