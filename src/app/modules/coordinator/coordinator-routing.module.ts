import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CoordinatorComponent} from './coordinator.component';
import {ViewProfessorComponent} from './components/view-professor/view-professor.component';
import {InsertSubjectComponent} from './components/insert-subject/insert-subject.component';
import {ViewClassComponent} from './components/view-class/view-class.component';
import {InsertClassComponent} from './components/insert-class/insert-class.component';
import {DetailsCourseComponent} from './components/details-course/details-course.component';
import {DataFormComponent} from '../../templates/data-form/data-form.component';
import {StudentFormData} from '../../global-models/StudentFormData';
import {Professor} from '../../global-models/Professor';
import {StudentService} from './services/student/student.service';
import {DataDetailsComponent} from '../../templates/data-details/data-details.component';
import {ProfessorService} from './services/professor/professor.service';
import {ClassService} from './services/class/class.service';
import {DisciplineService} from './services/discipline/discipline.service';
import {DataViewComponent} from '../../templates/data-view/data-view.component';


const routes: Routes = [
  {
    path: '',
    component: CoordinatorComponent,
    children: [
      {
        path: 'details/professor/:id',
        component: DataDetailsComponent,
        data: {
          pageTitle: 'Professor Details',
          backUrl: '/coordinator/view/professor',
          source: ProfessorService
        }
      },
      {
        path: 'details/student/:id',
        component: DataDetailsComponent,
        data: {
          pageTitle: 'Student Details',
          backUrl: '/coordinator/view/student',
          source: StudentService
        }
      },
      {
        path: 'details/subject/:id',
        component: DataDetailsComponent,
        data: {
          pageTitle: 'Discipline Details',
          backUrl: '/coordinator/view/subject',
          source: DisciplineService
        }
      },
      {
        path: 'details/class/:id',
        component: DataDetailsComponent,
        data: {
          pageTitle: 'Class Details',
          backUrl: '/coordinator/view/class',
          source: ClassService
        }
      },
      {
        path: 'details/course',
        component: DetailsCourseComponent
      },
      {path: 'view/professor', component: ViewProfessorComponent},
      {
        path: 'view/student',
        component: DataViewComponent,
        data: {
          backRoute: '/coordinator/view/student',
          detailsRoute: '/coordinator/details/student',
          title: 'View Students',
          placeholder: 'Name, Email or Course',
          columnsDef: [
            {field: 'name', header: 'Name'},
            {field: 'className', header: 'Class'},
            {field: 'classPeriod', header: 'Class Period'}
          ],
          source: StudentService
        }

      },
      {
        path: 'view/subject',
        component: DataViewComponent,
        data: {
          backRoute: '/coordinator/view/subject',
          detailsRoute: '/coordinator/details/subject',
          title: 'View Disciplines',
          placeholder: 'Name, Email or Course',
          columnsDef: [
            {field: 'name', header: 'Name'},
            {field: 'period', header: 'Period'},
            {field: 'professorName', header: 'Professor'}
          ],
          source: DisciplineService
        }
      },
      {
        path: 'view/class',
        component: DataViewComponent,
        data: {
          backRoute: '/coordinator/view/class',
          detailsRoute: '/coordinator/details/class',
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
        path: 'insert/professor',
        component: DataFormComponent,
        data: {
          collectionName: 'users',
          dataType: Professor,
          pageTitle: 'Insert Professor'
        }

      },
      {
        path: 'insert/student',
        component: DataFormComponent,
        data: {
          collectionName: 'users',
          dataType: StudentFormData,
          pageTitle: 'Insert Student'
        }
      },
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
