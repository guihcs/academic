import { Component, OnInit } from '@angular/core';
import {ConfigurableInput} from '../../models/configurable-input';

@Component({
  selector: 'app-raw-label',
  templateUrl: './raw-label.component.html',
  styleUrls: ['./raw-label.component.css']
})
export class RawLabelComponent implements OnInit, ConfigurableInput {

  args;
  constructor() { }

  ngOnInit(): void {
  }

  applyArguments(args) {
    this.args = args;
  }

  getFormControl() {
  }



}
