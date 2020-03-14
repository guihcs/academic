import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HomeRoutingModule} from './home-routing.module';
import { ToolbarComponent } from './toolbar/toolbar.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import {MatListModule} from '@angular/material/list';
import { SidenavComponent } from './sidenav/sidenav.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import {FormsModule} from '@angular/forms';
import {SidenavItemsComponent} from './sidenav/sidenav.items.component';
import {OptionsItemsComponent} from './toolbar/options.items.component';



@NgModule({
  declarations: [
    ToolbarComponent,
    SidenavComponent,
    SidenavItemsComponent,
    OptionsItemsComponent
  ],
  exports: [
    ToolbarComponent,
    SidenavComponent,
    OptionsItemsComponent,
    SidenavItemsComponent
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
    FormsModule
  ]
})
export class HomeModule { }
