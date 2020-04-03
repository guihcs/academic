import {Component, OnInit} from '@angular/core';
import {InputDescriptor} from '../../models/input-descriptor';
import {ConfigurableInput} from '../../models/configurable-input';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'lib-text',
  templateUrl: './text-input.component.html',
  styleUrls: ['./text-input.component.css']
})
export class TextInputComponent implements OnInit, ConfigurableInput {

  args: InputDescriptor;
  formControl: FormControl = new FormControl('');

  constructor() {
  }

  ngOnInit(): void {
  }

  applyArguments(args: InputDescriptor) {
    this.args = args;
    if (args.defaultValue) {
      this.formControl.setValue(args.defaultValue);
    }
  }

  getFormControl() {
    return this.formControl;
  }

}
