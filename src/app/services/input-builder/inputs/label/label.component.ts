import {Component, OnInit} from '@angular/core';
import {InputDescriptor} from '../../InputDescriptor';
import {DynamicInput} from '../../DynamicInput';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-label',
  template: `
    <p>{{args.label}}: {{args.defaultValue}}</p>
  `
})
export class LabelComponent implements OnInit, DynamicInput {

  args: InputDescriptor;
  formControl = new FormControl('');

  constructor() {
  }

  ngOnInit(): void {
  }

  applyArguments(args) {
    this.args = args;
    if (args.defaultValue) {
      this.formControl.setValue(args.defaultValue);
    }
  }

  getFormControl() {
    return this.formControl;
  }


}
