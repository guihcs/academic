import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {StudentComponent} from './student.component';
import {ProfileComponent} from '../../templates/profile/profile.component';
import {FileUploadPageComponent} from './components/file-upload-page/file-upload-page.component';
import {GradesComponent} from './components/grades/grades.component';


const routes: Routes = [
  {
    path: '',
    component: StudentComponent,
    children: [
      {path: 'profile', component: ProfileComponent},
      {path: 'upload', component: FileUploadPageComponent},
      {path: 'grades', component: GradesComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentRoutingModule { }
