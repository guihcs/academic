import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card';
import {LoginComponent} from './pages/login/login.component';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatListModule} from '@angular/material/list';
import {HomeComponent} from './pages/home/home.component';
import {ExamComponent} from './pages/exam/exam.component';
import {HomeModule} from './pages/home/home.module';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatMenuModule} from '@angular/material/menu';
import {MatExpansionModule} from '@angular/material/expansion';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CoordinatorFormComponent} from './pages/home/components/admin/coordinator-form/coordinator-form.component';
import {CoordinatorViewComponent} from './pages/home/components/admin/coordinator-view/coordinator-view.component';
import {MatTableModule} from '@angular/material/table';
import {ProfileComponent} from './pages/home/components/profile/profile.component';
import {CoordinatorDetailsComponent} from './pages/home/components/admin/coordinator-details/coordinator-details.component';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {ProfessorDetailsComponent} from './pages/home/components/coordinator/professor-details/professor-details.component';
import {ProfessorFormComponent} from './pages/home/components/coordinator/professor-form/professor-form.component';
import {ProfessorViewComponent} from './pages/home/components/coordinator/professor-view/professor-view.component';
import {StudentDetailsComponent} from './pages/home/components/coordinator/student-details/student-details.component';
import {StudentFormComponent} from './pages/home/components/coordinator/student-form/student-form.component';
import {StudentViewComponent} from './pages/home/components/coordinator/student-view/student-view.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    ExamComponent,
    CoordinatorFormComponent,
    CoordinatorViewComponent,
    ProfileComponent,
    CoordinatorDetailsComponent,
    ProfessorDetailsComponent,
    ProfessorFormComponent,
    ProfessorViewComponent,
    StudentDetailsComponent,
    StudentFormComponent,
    StudentViewComponent
  ],
  imports: [
    HomeModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    MatListModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatMenuModule,
    MatExpansionModule,
    ReactiveFormsModule,
    MatTableModule,
    MatCheckboxModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
