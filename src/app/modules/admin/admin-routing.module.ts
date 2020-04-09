import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AdminComponent} from './admin.component';
import {UserViewComponent} from './components/user-view/user-view.component';


const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      {path: 'user/view', component: UserViewComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
