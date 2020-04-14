import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import {TemplatesModule} from '../../templates/templates.module';
import {MatMenuModule} from '@angular/material/menu';
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';
import {MatRippleModule} from '@angular/material/core';
import {MatCardModule} from '@angular/material/card';
import { UserViewComponent } from './components/user-view/user-view.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatTableModule} from '@angular/material/table';
import {MatSortModule} from '@angular/material/sort';
import {MatPaginatorModule} from '@angular/material/paginator';
import {UserFormComponent} from './components/user-form/user-form.component';
import {DynamicFormsModule} from '../../libs/dynamic-forms/dynamic-forms.module';
import {MatButtonModule} from '@angular/material/button';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {AddressInputComponent} from './components/address-input/address-input.component';
import {ReactiveFormsModule} from '@angular/forms';
import {ViewCoursesComponent} from './components/view-courses/view-courses.component';
import {ExamFormComponent} from './components/exam-form/exam-form.component';
import {CreateCourseComponent} from './components/create-course/create-course.component';
import {UserSelectorComponent} from './components/user-selector/user-selector.component';
import {MatSelectModule} from '@angular/material/select';
import { CoordinatorDetailsComponent } from './components/coordinator-details/coordinator-details.component';
import { CourseSelectComponent } from './components/course-select/course-select.component';
import { CourseDetailsComponent } from './components/course-details/course-details.component';


@NgModule({
    declarations: [
        AdminComponent,
        UserViewComponent,
        UserFormComponent,
        AddressInputComponent,
        ViewCoursesComponent,
        ExamFormComponent,
        CreateCourseComponent,
        UserSelectorComponent,
        CoordinatorDetailsComponent,
        CourseSelectComponent,
        CourseDetailsComponent
    ],
    exports: [
        CourseSelectComponent
    ],
    imports: [
        CommonModule,
        AdminRoutingModule,
        TemplatesModule,
        MatMenuModule,
        MatListModule,
        MatIconModule,
        MatRippleModule,
        MatCardModule,
        MatFormFieldModule,
        MatInputModule,
        MatTableModule,
        MatSortModule,
        MatPaginatorModule,
        DynamicFormsModule,
        MatButtonModule,
        MatSnackBarModule,
        ReactiveFormsModule
    ]
})
export class AdminModule { }
