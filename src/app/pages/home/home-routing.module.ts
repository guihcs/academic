import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './home.component';
import {ProfileComponent} from './components/profile/profile.component';
import {ExamFormComponent} from './components/admin/exam-form/exam-form.component';
import {UserViewComponent} from './components/user-view/user-view.component';
import {UserFormComponent} from './components/user-form/user-form.component';


const routes: Routes = [
  {
    path: 'home', component: HomeComponent,
    children: [
      {path: 'insert/:userType', component: UserFormComponent},
      {path: 'view/:userType', component: UserViewComponent},
      {path: 'profile', component: ProfileComponent},
      {path: 'examForm', component: ExamFormComponent}
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class HomeRoutingModule {
}
