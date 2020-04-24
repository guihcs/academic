import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ProfessorComponent} from './professor.component';
import {ViewClassComponent} from './components/view-class/view-class.component';
import {ClassDetailsComponent} from './components/class-details/class-details.component';
import {ViewDisciplinesComponent} from './components/view-disciplines/view-disciplines.component';
import {DisciplineDetailsComponent} from './components/discipline-details/discipline-details.component';
import {DataViewComponent} from '../../templates/data-view/data-view.component';
import {ProfessorService} from '../coordinator/services/professor/professor.service';
import {DisciplineService} from './services/discipline/discipline.service';
import {ClassService} from './services/class/class.service';
import {DataDetailsComponent} from '../../templates/data-details/data-details.component';


const routes: Routes = [
  {
    path: '',
    component: ProfessorComponent,
    children: [
      {
        path: 'view/class',
        component: DataViewComponent,
        data: {
          detailsRoute: (_class) => '/professor/details/class/' + _class._id,
          title: 'View Classes',
          placeholder: 'Name, Email or Course',
          columnsDef: [
            {field: 'name', header: 'Name'},
            {field: 'period', header: 'Period'}
          ],
          source: ClassService
        }
      },
      {
        path: 'view/disciplines',
        component: DataViewComponent,
        data: {
          detailsRoute: (discipline) => '/professor/details/discipline/' + discipline._id,
          title: 'View Disciplines',
          placeholder: 'Name, Email or Course',
          columnsDef: [
            {field: 'name', header: 'Name'},
            {field: 'period', header: 'Period'}
          ],
          source: DisciplineService
        }
      },
      {
        path: 'details/class/:id',
        component: DataDetailsComponent,
        data: {
          pageTitle: 'Class Details',
          backUrl: '/professor/view/class',
          source: ClassService,
          updateMessage: 'Class Updated.',
          deleteMessage: 'Class Deleted.'
        }
      },
      {
        path: 'details/discipline/:id',
        component: DataDetailsComponent,
        data: {
          pageTitle: 'Discipline Details',
          backUrl: '/professor/view/disciplines',
          source: DisciplineService,
          updateMessage: 'Discipline Updated.',
          deleteMessage: 'Discipline Deleted.'
        }
      }
    ]
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfessorRoutingModule { }
