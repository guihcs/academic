import { Component, OnInit } from '@angular/core';
import {ConfigurableInput} from '../../models/configurable-input';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.css']
})
export class CheckboxComponent implements OnInit, ConfigurableInput {

  formControl = new FormControl();
  args;
  constructor() { }

  ngOnInit(): void {
  }

  applyArguments(args) {
    this.args = args;
    if (args.defaultValue) this.formControl.setValue(args.defaultValue);
  }

  getFormControl() {
    return this.formControl;
  }



}
