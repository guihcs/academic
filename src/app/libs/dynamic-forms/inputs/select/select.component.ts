import {Component, OnInit} from '@angular/core';
import {ConfigurableInput} from '../../models/configurable-input';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'lib-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.css']
})
export class SelectComponent implements OnInit, ConfigurableInput {
  args;
  formControl = new FormControl('');

  constructor() {
  }

  ngOnInit(): void {
  }

  applyArguments(args: any): any {
    this.args = args;
  }

  getFormControl(): any {
    return this.formControl;
  }


}
