import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from './login.component';


const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'home', loadChildren: () => import('../home/home.module').then(m => m.HomeModule)},
  {path: '', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule {
}
