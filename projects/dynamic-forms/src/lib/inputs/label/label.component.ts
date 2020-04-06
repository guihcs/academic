import {Component, OnInit} from '@angular/core';
import {ConfigurableInput} from '../../models/configurable-input';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'lib-label',
  templateUrl: './label.component.html',
  styleUrls: ['./label.component.css']
})
export class LabelComponent implements OnInit, ConfigurableInput {

  args;
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
