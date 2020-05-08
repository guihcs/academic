import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {AdminComponent} from './admin.component';
import {ExamFormComponent} from './components/exam-form/exam-form.component';
import {DataFormComponent} from '../../templates/data-form/data-form.component';
import {CoordinatorFormData} from '../../global-models/user/CoordinatorFormData';
import {CourseFormData} from '../../global-models/CourseFormData';
import {DataViewComponent} from '../../templates/data-view/data-view.component';
import {DataDetailsComponent} from '../../templates/data-details/data-details.component';
import {UserService} from './services/user/user.service';
import {CoordinatorService} from './services/coordinator/coordinator.service';
import {CourseService} from '../../global-services/course/course.service';
import {UserProfile} from '../../global-models/user/UserProfile';
import {ProfileComponent} from '../../templates/profile/profile.component';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      {path: 'profile', component: ProfileComponent},
      {
        path: 'insert/coordinator',
        component: DataFormComponent,
        data: {
          dataType: CoordinatorFormData,
          pageTitle: 'Insert Coordinator',
          successMessage: 'Coordinator Inserted.',
          dataSource: CoordinatorService
        }
      },

      {
        path: 'insert/course',
        component: DataFormComponent,
        data: {
          dataType: CourseFormData,
          pageTitle: 'Insert Course',
          successMessage: 'Course Inserted.',
          dataSource: CourseService
        }
      },

      {
        path: 'view/user',
        component: DataViewComponent,
        data: {
          detailsRoute: (user) => {
            if (user.type === UserProfile.COORDINATOR) return '/admin/details/coordinator/' + user._id;
            else return '/admin/details/user/' + user._id;
          } ,
          title: 'View Users',
          columnsDef: [
            {field: 'name', header: 'Name'},
            {field: 'userType', header: 'Profile'},
            {field: 'courseName', header: 'Course'}
          ],
          source: UserService
        }
      },

      {
        path: 'view/course',
        component: DataViewComponent,
        data: {
          detailsRoute: (course) =>'/admin/details/course/' + course._id,
          title: 'View Courses',
          columnsDef: [
            {field: 'name', header: 'Name'},
            {field: 'area', header: 'Area'},
            {field: 'coordinatorName', header: 'Coordinator'}
          ],
          source: CourseService
        }
      },

      {path: 'details/exam', component: ExamFormComponent},
      {
        path: 'details/course/:id',
        component: DataDetailsComponent,
        data: {
          pageTitle: 'Course Details',
          backUrl: '/admin/view/course',
          source: CourseService,
          updateMessage: 'Course Updated.',
          deleteMessage: 'Course Deleted.'
        }
      },
      {
        path: 'details/coordinator/:id',
        component: DataDetailsComponent,
        data: {
          pageTitle: 'Coordinator Details',
          backUrl: '/admin/view/user',
          source: CoordinatorService,
          updateMessage: 'Coordinator Updated.',
          deleteMessage: 'Coordinator Deleted.'
        }
      },
      {
        path: 'details/user/:id',
        component: DataDetailsComponent,
        data: {
          pageTitle: 'User Details',
          backUrl: '/admin/view/user',
          source: UserService,
          updateMessage: 'User Updated.',
          deleteMessage: 'User Deleted.'
        }
      }


    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule {
}
