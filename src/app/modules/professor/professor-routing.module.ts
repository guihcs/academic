import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ProfessorComponent} from './professor.component';
import {ViewClassComponent} from './components/view-class/view-class.component';
import {ClassDetailsComponent} from './components/class-details/class-details.component';
import {ViewDisciplinesComponent} from './components/view-disciplines/view-disciplines.component';
import {DisciplineDetailsComponent} from './components/discipline-details/discipline-details.component';


const routes: Routes = [
  {
    path: '',
    component: ProfessorComponent,
    children: [
      {path: 'view/class', component: ViewClassComponent},
      {path: 'view/disciplines', component: ViewDisciplinesComponent},
      {path: 'details/class/:id', component: ClassDetailsComponent},
      {path: 'details/discipline/:id', component: DisciplineDetailsComponent}
    ]
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfessorRoutingModule { }
