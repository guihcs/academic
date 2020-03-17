import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HomeRoutingModule} from './home-routing.module';
import {ToolbarComponent} from './toolbar/toolbar.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import {MatListModule} from '@angular/material/list';
import {SidenavComponent} from './sidenav/sidenav.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {SidenavItemsComponent} from './sidenav/sidenav.items.component';
import {OptionsItemsComponent} from './toolbar/options.items.component';
import {UserFormComponent} from './components/user-form/user-form.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {UserViewComponent} from './components/user-view/user-view.component';
import {MatTableModule} from '@angular/material/table';
import {MatInputModule} from '@angular/material/input';
import {ExamFormComponent} from './components/admin/exam-form/exam-form.component';
import {UserDetailsComponent} from './components/user-details/user-details.component';


@NgModule({
  declarations: [
    ToolbarComponent,
    SidenavComponent,
    SidenavItemsComponent,
    OptionsItemsComponent,
    UserFormComponent,
    UserViewComponent,
    ExamFormComponent,
    UserDetailsComponent
  ],
  exports: [
    ToolbarComponent,
    SidenavComponent,
    OptionsItemsComponent,
    SidenavItemsComponent,
    UserFormComponent,
    UserViewComponent
  ],
  imports: [
    HomeRoutingModule,
    CommonModule,
    MatToolbarModule,
    MatIconModule,
    MatMenuModule,
    MatButtonModule,
    MatListModule,
    MatSidenavModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatTableModule,
    MatInputModule
  ]
})
export class HomeModule { }
