import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SidenavComponent} from './sidenav/sidenav.component';
import {ToolbarComponent} from './toolbar/toolbar.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {RouterModule} from '@angular/router';
import {MatMenuModule} from '@angular/material/menu';
import {OptionsItemsComponent} from './toolbar/options.items.component';
import {MatRippleModule} from '@angular/material/core';
import {MatCardModule} from '@angular/material/card';
import {DynamicFormsModule} from '../libs/dynamic-forms/dynamic-forms.module';
import {ConfirmDeleteDialogComponent} from './confirm-delete-dialog/confirm-delete-dialog.component';
import {MAT_SNACK_BAR_DEFAULT_OPTIONS} from '@angular/material/snack-bar';
import {MatDialogModule} from '@angular/material/dialog';
import { ProfileComponent } from './profile/profile.component';
import { DataViewComponent } from './data-view/data-view.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatTableModule} from '@angular/material/table';
import {MatSortModule} from '@angular/material/sort';
import {MatPaginatorModule} from '@angular/material/paginator';
import { DataFormComponent } from './data-form/data-form.component';
import { DataDetailsComponent } from './data-details/data-details.component';
import { DataSelectorComponent } from './data-selector/data-selector.component';
import {ReactiveFormsModule} from '@angular/forms';



@NgModule({
  declarations: [
    SidenavComponent,
    ToolbarComponent,
    OptionsItemsComponent,
    ConfirmDeleteDialogComponent,
    ProfileComponent,
    DataViewComponent,
    DataFormComponent,
    DataDetailsComponent,
    DataSelectorComponent
  ],
    imports: [
        CommonModule,
        MatSidenavModule,
        MatListModule,
        MatToolbarModule,
        MatButtonModule,
        MatIconModule,
        RouterModule,
        MatMenuModule,
        MatRippleModule,
        MatCardModule,
        MatDialogModule,
        DynamicFormsModule,
        MatFormFieldModule,
        MatInputModule,
        MatTableModule,
        MatSortModule,
        MatPaginatorModule,
        ReactiveFormsModule
    ],
    exports: [
        SidenavComponent,
        ToolbarComponent,
        OptionsItemsComponent,
        ConfirmDeleteDialogComponent,
        DataViewComponent,
        DataFormComponent,
        DataDetailsComponent
    ],

  providers: [
    {provide: MAT_SNACK_BAR_DEFAULT_OPTIONS, useValue: {duration: 2000}},
  ]
})
export class TemplatesModule { }
