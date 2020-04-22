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
import { courseViewFilter } from './models/CourseViewFilter';
import {CoordinatorService} from './services/coordinator/coordinator.service';
import {CourseService} from '../../global-services/course/course.service';
import {userViewFilter} from './models/UserViewFilter';
import {UserProfile} from '../../global-models/user/UserProfile';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [


      {
        path: 'insert/coordinator',
        component: DataFormComponent,
        data: {
          collectionName: 'users',
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
          collectionName: 'courses',
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
          placeholder: 'Name, Email or Course',
          columnsDef: [
            {field: 'name', header: 'Name'},
            {field: 'userType', header: 'Profile'},
            {field: 'courseName', header: 'Course'}
          ],
          source: UserService,
          filter: userViewFilter
        }
      },

      {
        path: 'view/course',
        component: DataViewComponent,
        data: {
          detailsRoute: (course) =>'/admin/details/course/' + course._id,
          title: 'View Courses',
          placeholder: 'Name, Email or Course',
          columnsDef: [
            {field: 'name', header: 'Name'},
            {field: 'area', header: 'Area'},
            {field: 'coordinatorName', header: 'Coordinator'}
          ],
          source: CourseService,
          filter: courseViewFilter
        }
      },

      {path: 'details/exam', component: ExamFormComponent},
      {
        path: 'details/course/:id',
        component: DataDetailsComponent,
        data: {
          collectionName: 'courses',
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
          collectionName: 'users',
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
          collectionName: 'users',
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
