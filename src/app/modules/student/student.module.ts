import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentRoutingModule } from './student-routing.module';
import { StudentComponent } from './student.component';
import {TemplatesModule} from '../../templates/templates.module';
import {MatMenuModule} from '@angular/material/menu';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { FileUploadComponent } from './components/file-upload/file-upload.component';
import {ReactiveFormsModule} from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import { GradesComponent } from './components/grades/grades.component';


@NgModule({
  declarations: [StudentComponent, FileUploadComponent, GradesComponent],
  imports: [
    CommonModule,
    StudentRoutingModule,
    TemplatesModule,
    MatMenuModule,
    MatSnackBarModule,
    ReactiveFormsModule,
    MatButtonModule,
  ]
})
export class StudentModule { }
