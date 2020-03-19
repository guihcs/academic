import {Component, OnInit} from '@angular/core';
import {DynamicInput} from '../../DynamicInput';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-text-input',
  template: `
    <mat-form-field [class]="class">
      <mat-label>{{label}}</mat-label>
      <input matInput [type]="type" [formControl]="formControl">
    </mat-form-field>
  `
})
export class TextInputComponent implements OnInit, DynamicInput {
  label;
  type = 'text';
  formControl = new FormControl('');
  class;

  constructor() {
  }

  ngOnInit(): void {
  }

  applyArguments(args) {
    if (args['label']) {
      this.label = args.label;
    }
    if (args['type']) {
      this.type = args.type;
    }
    if (args['class']) {
      this.class = args.class;
    }
  }

  getFormControl() {
    return this.formControl;
  }

}
