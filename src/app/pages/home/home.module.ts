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
import {OptionsItemsComponent} from './toolbar/options.items.component';
import {UserFormComponent} from './components/user-form/user-form.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {UserViewComponent} from './components/user-view/user-view.component';
import {MatTableModule} from '@angular/material/table';
import {MatInputModule} from '@angular/material/input';
import {ExamFormComponent} from './components/admin/exam-form/exam-form.component';
import {ProfessorNavComponent} from './components/professor/professor-nav/professor-nav.component';
import {StudentNavComponent} from './components/student/student-nav/student-nav.component';
import {MatRippleModule} from '@angular/material/core';
import {MAT_SNACK_BAR_DEFAULT_OPTIONS, MatSnackBarModule} from '@angular/material/snack-bar';
import {MAT_DIALOG_DEFAULT_OPTIONS, MatDialogModule} from '@angular/material/dialog';
import {ConfirmDeleteDialog} from './components/user-view/confirm-delete-dialog';
import {DynamicFormsModule} from '../../../../projects/dynamic-forms/src/lib/dynamic-forms.module';
import {AddressInputComponent} from './components/address-input/address-input.component';
import {MatCardModule} from '@angular/material/card';
import {HomeComponent} from './home.component';


@NgModule({
  declarations: [
    HomeComponent,
    ToolbarComponent,
    SidenavComponent,
    OptionsItemsComponent,
    UserFormComponent,
    UserViewComponent,
    ExamFormComponent,
    ProfessorNavComponent,
    StudentNavComponent,
    ConfirmDeleteDialog,
    AddressInputComponent
  ],
  exports: [
    ToolbarComponent,
    SidenavComponent,
    OptionsItemsComponent,
    UserFormComponent,
    UserViewComponent,
    ProfessorNavComponent,
    StudentNavComponent,
    AddressInputComponent
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
    MatInputModule,
    MatRippleModule,
    MatSnackBarModule,
    MatDialogModule,
    DynamicFormsModule,
    DynamicFormsModule,
    DynamicFormsModule,
    MatCardModule
  ],
  providers: [
    {provide: MAT_SNACK_BAR_DEFAULT_OPTIONS, useValue: {duration: 2000}},
    {provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: {hasBackdrop: true}}
  ]
})
export class HomeModule { }
