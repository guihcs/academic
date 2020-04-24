import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CoordinatorComponent} from './coordinator.component';
import {DataFormComponent} from '../../templates/data-form/data-form.component';
import {StudentFormData} from '../../global-models/user/StudentFormData';
import {ProfessorFormData} from '../../global-models/user/ProfessorFormData';
import {StudentService} from './services/student/student.service';
import {DataDetailsComponent} from '../../templates/data-details/data-details.component';
import {ProfessorService} from './services/professor/professor.service';
import {ClassService} from './services/class/class.service';
import {DisciplineService} from './services/discipline/discipline.service';
import {DataViewComponent} from '../../templates/data-view/data-view.component';
import {DisciplineFormData} from '../../global-models/DisciplineFormData';
import {ClassFormData} from '../../global-models/ClassFormData';
import {CourseService} from './services/course/course.service';


const routes: Routes = [
  {
    path: '',
    component: CoordinatorComponent,
    children: [
      {
        path: 'insert/professor',
        component: DataFormComponent,
        data: {
          dataType: ProfessorFormData,
          pageTitle: 'Insert Professor',
          successMessage: 'Professor Inserted.',
          dataSource: ProfessorService
        }

      },
      {
        path: 'insert/student',
        component: DataFormComponent,
        data: {
          dataType: StudentFormData,
          pageTitle: 'Insert Student',
          successMessage: 'Student Inserted.',
          dataSource: StudentService
        }
      },
      {
        path: 'insert/subject',
        component: DataFormComponent,
        data: {
          dataType: DisciplineFormData,
          pageTitle: 'Insert Discipline',
          successMessage: 'Discipline Inserted.',
          dataSource: DisciplineService
        }
      },
      {
        path: 'insert/class',
        component: DataFormComponent,
        data: {
          dataType: ClassFormData,
          pageTitle: 'Insert Class',
          successMessage: 'Class Inserted.',
          dataSource: ClassService
        }
      },
      {
        path: 'view/professor',
        component: DataViewComponent,
        data: {
          detailsRoute: (professor) => '/coordinator/details/professor/' + professor._id,
          title: 'View Professors',
          placeholder: 'Name, Email or Course',
          columnsDef: [
            {field: 'name', header: 'Name'}
          ],
          source: ProfessorService
        }
      },
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
        path: 'details/professor/:id',
        component: DataDetailsComponent,
        data: {
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
          pageTitle: 'Class Details',
          backUrl: '/coordinator/view/class',
          source: ClassService,
          updateMessage: 'Class Updated.',
          deleteMessage: 'Class Deleted.'
        }
      },
      {
        path: 'details/course',
        component: DataDetailsComponent,
        data: {
          pageTitle: 'Course Details',
          backUrl: '/coordinator/view/course',
          source: CourseService,
          updateMessage: 'Course Updated.',
          deleteMessage: 'Course Deleted.'
        }
      }

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoordinatorRoutingModule { }
