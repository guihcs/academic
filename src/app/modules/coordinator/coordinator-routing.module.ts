import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CoordinatorComponent} from './coordinator.component';
import {ViewProfessorComponent} from './components/view-professor/view-professor.component';
import {InsertSubjectComponent} from './components/insert-subject/insert-subject.component';
import {InsertClassComponent} from './components/insert-class/insert-class.component';
import {DetailsCourseComponent} from './components/details-course/details-course.component';
import {DataFormComponent} from '../../templates/data-form/data-form.component';
import {StudentFormData} from '../../global-models/user/StudentFormData';
import {ProfessorFormData} from '../../global-models/user/ProfessorFormData';
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
          collectionName: 'users',
          pageTitle: 'Professor Details',
          backUrl: '/coordinator/view/professor',
          source: ProfessorService,
          updateMessage: 'Professor Updated.',
          deleteMessage: 'Professor Deleted.'
        }
      },
      {
        path: 'details/student/:id',
        component: DataDetailsComponent,
        data: {
          collectionName: 'users',
          pageTitle: 'Student Details',
          backUrl: '/coordinator/view/student',
          source: StudentService,
          updateMessage: 'Student Updated.',
          deleteMessage: 'Student Deleted'
        }
      },
      {
        path: 'details/subject/:id',
        component: DataDetailsComponent,
        data: {
          collectionName: 'subjects',
          pageTitle: 'Discipline Details',
          backUrl: '/coordinator/view/subject',
          source: DisciplineService,
          updateMessage: 'Discipline Updated.',
          deleteMessage: 'Discipline Deleted'
        }
      },
      {
        path: 'details/class/:id',
        component: DataDetailsComponent,
        data: {
          collectionName: 'classes',
          pageTitle: 'Class Details',
          backUrl: '/coordinator/view/class',
          source: ClassService,
          updateMessage: 'Class Updated.',
          deleteMessage: 'Class Deleted.'
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
          detailsRoute: (student) => '/coordinator/details/student/' + student._id,
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
          detailsRoute: (discipline) => '/coordinator/details/subject/' + discipline._id,
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
          detailsRoute: (_class) => '/coordinator/details/class/' + _class._id,
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
          dataType: ProfessorFormData,
          pageTitle: 'Insert Professor',
          successMessage: 'Professor Inserted.'
        }

      },
      {
        path: 'insert/student',
        component: DataFormComponent,
        data: {
          collectionName: 'users',
          dataType: StudentFormData,
          successMessage: 'Student Inserted.'
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
