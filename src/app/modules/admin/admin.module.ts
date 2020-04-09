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


@NgModule({
  declarations: [AdminComponent, UserViewComponent],
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
    MatPaginatorModule
  ]
})
export class AdminModule { }
