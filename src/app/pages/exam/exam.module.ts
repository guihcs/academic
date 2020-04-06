import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ExamRoutingModule} from './exam-routing.module';
import {ExamComponent} from './exam.component';


@NgModule({
  declarations: [
    ExamComponent
  ],
  imports: [
    CommonModule,
    ExamRoutingModule
  ]
})
export class ExamModule {
}
