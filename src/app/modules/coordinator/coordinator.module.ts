import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoordinatorRoutingModule } from './coordinator-routing.module';
import { CoordinatorComponent } from './coordinator.component';
import {TemplatesModule} from '../../templates/templates.module';
import {MatMenuModule} from '@angular/material/menu';
import { InsertStudentComponent } from './components/insert-student/insert-student.component';
import { InsertProfessorComponent } from './components/insert-professor/insert-professor.component';
import { InsertSubjectComponent } from './components/insert-subject/insert-subject.component';
import { ViewProfessorComponent } from './components/view-professor/view-professor.component';
import { ViewStudentComponent } from './components/view-student/view-student.component';
import { ViewSubjectComponent } from './components/view-subject/view-subject.component';
import { DetailsProfessorComponent } from './components/details-professor/details-professor.component';
import { DetailsStudentComponent } from './components/details-student/details-student.component';
import { DetailsSubjectComponent } from './components/details-subject/details-subject.component';
import { ViewClassComponent } from './components/view-class/view-class.component';
import { DetailsClassComponent } from './components/details-class/details-class.component';
import { InsertClassComponent } from './components/insert-class/insert-class.component';
import {DynamicFormsModule} from '../../libs/dynamic-forms/dynamic-forms.module';
import {MatButtonModule} from '@angular/material/button';
import { ProfessorSelectorComponent } from './components/professor-selector/professor-selector.component';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatTableModule} from '@angular/material/table';
import {MatSortModule} from '@angular/material/sort';
import {MatPaginatorModule} from '@angular/material/paginator';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatDividerModule} from '@angular/material/divider';
import {MatIconModule} from '@angular/material/icon';
import { DetailsCourseComponent } from './components/details-course/details-course.component';
import {MatListModule} from '@angular/material/list';
import { ClassSelectorComponent } from './components/class-selector/class-selector.component';


@NgModule({
  declarations: [CoordinatorComponent, InsertStudentComponent, InsertProfessorComponent, InsertSubjectComponent, ViewProfessorComponent, ViewStudentComponent, ViewSubjectComponent, DetailsProfessorComponent, DetailsStudentComponent, DetailsSubjectComponent, ViewClassComponent, DetailsClassComponent, InsertClassComponent, ProfessorSelectorComponent, DetailsCourseComponent, ClassSelectorComponent],
    imports: [
        CommonModule,
        CoordinatorRoutingModule,
        TemplatesModule,
        MatMenuModule,
        DynamicFormsModule,
        MatButtonModule,
        MatSnackBarModule,
        MatFormFieldModule,
        MatInputModule,
        MatTableModule,
        MatSortModule,
        MatPaginatorModule,
        FormsModule,
        MatDividerModule,
        MatIconModule,
        ReactiveFormsModule,
        MatListModule
    ]
})
export class CoordinatorModule { }
