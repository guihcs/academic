import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './home.component';
import {CoordinatorFormComponent} from '../../components/coordinator-form/coordinator-form.component';


const routes: Routes = [
  {path: 'home', component: HomeComponent,
    children: [
      {path: 'insertCoordinator', component: CoordinatorFormComponent}
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
export class HomeRoutingModule { }
