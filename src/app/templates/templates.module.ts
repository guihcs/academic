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



@NgModule({
  declarations: [
    SidenavComponent,
    ToolbarComponent,
    OptionsItemsComponent
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
    MatCardModule
  ],
  exports: [
    SidenavComponent,
    ToolbarComponent,
    OptionsItemsComponent
  ]
})
export class TemplatesModule { }
