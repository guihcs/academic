import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfessorRoutingModule } from './professor-routing.module';
import { ProfessorComponent } from './professor.component';
import {TemplatesModule} from '../../templates/templates.module';
import {MatMenuModule} from '@angular/material/menu';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { ViewClassComponent } from './components/view-class/view-class.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatTableModule} from '@angular/material/table';
import {MatSortModule} from '@angular/material/sort';
import {MatPaginatorModule} from '@angular/material/paginator';
import { ClassDetailsComponent } from './components/class-details/class-details.component';
import { ViewDisciplinesComponent } from './components/view-disciplines/view-disciplines.component';
import { DisciplineDetailsComponent } from './components/discipline-details/discipline-details.component';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {DynamicFormsModule} from '../../libs/dynamic-forms/dynamic-forms.module';
import {MatListModule} from '@angular/material/list';
import {ReactiveFormsModule} from '@angular/forms';
import { StudentGradeComponent } from './components/student-grade/student-grade.component';
import { GradeComponent } from './components/grade/grade.component';


@NgModule({
  declarations: [ProfessorComponent, ViewClassComponent, ClassDetailsComponent, ViewDisciplinesComponent, DisciplineDetailsComponent, StudentGradeComponent, GradeComponent],
  imports: [
    CommonModule,
    ProfessorRoutingModule,
    TemplatesModule,
    MatMenuModule,
    MatSnackBarModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
    DynamicFormsModule,
    MatListModule,
    ReactiveFormsModule
  ]
})
export class ProfessorModule { }
