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
import {UserDetailsComponent} from './user-details/user-details.component';
import {DynamicFormsModule} from '../libs/dynamic-forms/dynamic-forms.module';
import {ConfirmDeleteDialogComponent} from './confirm-delete-dialog/confirm-delete-dialog.component';
import {MAT_SNACK_BAR_DEFAULT_OPTIONS} from '@angular/material/snack-bar';
import {MatDialogModule} from '@angular/material/dialog';
import { ProfileComponent } from './profile/profile.component';



@NgModule({
  declarations: [
    SidenavComponent,
    ToolbarComponent,
    OptionsItemsComponent,
    UserDetailsComponent,
    ConfirmDeleteDialogComponent,
    ProfileComponent
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
    DynamicFormsModule
  ],
  exports: [
    SidenavComponent,
    ToolbarComponent,
    OptionsItemsComponent,
    UserDetailsComponent,
    ConfirmDeleteDialogComponent
  ],

  providers: [
    {provide: MAT_SNACK_BAR_DEFAULT_OPTIONS, useValue: {duration: 2000}},
  ]
})
export class TemplatesModule { }
