import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CoordinatorComponent} from './coordinator.component';
import {DataFormComponent} from '../../templates/data-form/data-form.component';
import {StudentFormData} from '../../global-models/user/StudentFormData';
import {ProfessorFormData} from '../../global-models/user/ProfessorFormData';
import {StudentService} from '../../global-services/student/student.service';
import {DataDetailsComponent} from '../../templates/data-details/data-details.component';
import {ProfessorService} from './services/professor/professor.service';
import {ClassService} from './services/class/class.service';
import {DisciplineService} from './services/discipline/discipline.service';
import {DataViewComponent} from '../../templates/data-view/data-view.component';
import {DisciplineFormData} from '../../global-models/DisciplineFormData';
import {ClassFormData} from '../../global-models/ClassFormData';
import {ProfileComponent} from '../../templates/profile/profile.component';
import {TabbedPaneComponent} from '../../templates/tabbed-pane/tabbed-pane.component';
import {DefaultUpdateComponent} from '../../templates/default-update/default-update.component';
import {ProfessorDisciplinesComponent} from './components/professor-disciplines/professor-disciplines.component';
import {ClassDisciplineViewComponent} from '../../templates/class-discipline-view/class-discipline-view.component';
import {ClassStudentsComponent} from './components/class-students/class-students.component';
import {InsertStudentComponent} from './components/insert-student/insert-student.component';
import {ViewStudentComponent} from './components/view-student/view-student.component';
import {DisciplinesDialogComponent} from '../../templates/disciplines-dialog/disciplines-dialog.component';
import {DisciplinesViewComponent} from '../../templates/disciplines-view/disciplines-view.component';


const routes: Routes = [
  {
    path: '',
    component: CoordinatorComponent,
    children: [
      {path: 'profile', component: ProfileComponent},
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
        component: InsertStudentComponent,
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
          columnsDef: [
            {field: 'name', header: 'Name'}
          ],
          source: ProfessorService

        }
      },
      {
        path: 'view/student',
        component: ViewStudentComponent,
        data: {
          detailsRoute: (student) => '/coordinator/details/student/' + student._id,
          title: 'View Students',
          columnsDef: [
            {field: 'name', header: 'Name'},
            {field: 'className', header: 'Class'},
            {field: 'classPeriod', header: 'Class Period'}
          ],
          source: StudentService,

        }

      },
      {
        path: 'view/subject',
        component: DataViewComponent,
        data: {
          detailsRoute: (discipline) => '/coordinator/details/subject/' + discipline._id,
          title: 'View Disciplines',
          columnsDef: [
            {field: 'name', header: 'Name'},
            {field: 'period', header: 'Period'},
            {field: 'professorName', header: 'Professor'}
          ],
          source: DisciplineService,

        }
      },
      {
        path: 'view/class',
        component: DataViewComponent,
        data: {
          detailsRoute: (_class) => '/coordinator/details/class/' + _class._id,
          title: 'View Classes',
          columnsDef: [
            {field: 'name', header: 'Name'},
            {field: 'period', header: 'Period'}
          ],
          source: ClassService,

        }
      },
      {
        path: 'details/professor/:id',
        component: TabbedPaneComponent,
        data: {
          pageTitle: 'Professor Details',
          backUrl: '/coordinator/view/professor',
          source: ProfessorService,
          updateMessage: 'Professor Updated.',
          deleteMessage: 'Professor Deleted.',
          tabs: [
            {
              name: 'Profile',
              component: DefaultUpdateComponent
            },
            {
              name: 'Disciplines',
              component: ProfessorDisciplinesComponent
            }
          ]
        }
      },
      {
        path: 'details/student/:id',
        component: TabbedPaneComponent,
        data: {
          pageTitle: 'Student Details',
          backUrl: '/coordinator/view/student',
          source: StudentService,
          updateMessage: 'Student Updated.',
          deleteMessage: 'Student Deleted',
          tabs: [
            {
              name: 'Profile',
              component: DefaultUpdateComponent
            },
            {
              name: 'Disciplines',
              component: DisciplinesViewComponent
            }
          ]
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
        component: TabbedPaneComponent,
        data: {
          pageTitle: 'Class Details',
          backUrl: '/coordinator/view/class',
          source: ClassService,
          updateMessage: 'Class Updated.',
          deleteMessage: 'Class Deleted.',
          tabs: [
            {
              name: 'Details',
              component: DefaultUpdateComponent
            },
            {
              name: 'Disciplines',
              component: ClassDisciplineViewComponent
            },
            {
              name: 'Students',
              component: ClassStudentsComponent
            }
          ]
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
