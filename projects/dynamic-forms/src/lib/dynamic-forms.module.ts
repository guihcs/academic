import {NgModule} from '@angular/core';
import {DynamicFormsComponent} from './dynamic-forms.component';
// @ts-ignore
import {TextInputComponent} from './inputs/text/text-input.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {LabelComponent} from './inputs/label/label.component';
import {CommonModule} from '@angular/common';


@NgModule({
  declarations: [DynamicFormsComponent, TextInputComponent, LabelComponent],
  imports: [
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    CommonModule
  ],
  exports: [
    DynamicFormsComponent
  ]
})
export class DynamicFormsModule {
}
