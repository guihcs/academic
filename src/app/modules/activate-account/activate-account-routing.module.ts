import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PasswordCreatorComponent} from './components/password-creator/password-creator.component';


const routes: Routes = [
  {
    path: ':id',
    component: PasswordCreatorComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ActivateAccountRoutingModule { }
