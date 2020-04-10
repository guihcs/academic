import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {AdminComponent} from './admin.component';
import {UserViewComponent} from './components/user-view/user-view.component';
import {UserFormComponent} from './components/user-form/user-form.component';
import {ExamFormComponent} from './components/exam-form/exam-form.component';
import {ViewCoursesComponent} from './components/view-courses/view-courses.component';
import {CreateCourseComponent} from './components/create-course/create-course.component';
import {UserDetailsComponent} from '../../templates/user-details/user-details.component';
import {DetailsGuard} from '../../global-guards/details/details.guard';
import {CoordinatorDetailsComponent} from './components/coordinator-details/coordinator-details.component';
import {CourseDetailsComponent} from './components/course-details/course-details.component';


const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      {path: 'details/coordinator/:id', component: CoordinatorDetailsComponent},
      {path: 'details/course/:id', component: CourseDetailsComponent},
      {path: 'details/:userID', component: UserDetailsComponent},

      {path: 'user/view', component: UserViewComponent},
      {path: 'insert/:userType', component: UserFormComponent},
      {path: 'examForm', component: ExamFormComponent},
      {path: 'createCourse', component: CreateCourseComponent},
      {path: 'viewCourses', component: ViewCoursesComponent}

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule {
}
