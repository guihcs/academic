import { Component, OnInit } from '@angular/core';
import {ConfigurableInput} from '../../../../libs/dynamic-forms/models/configurable-input';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-professor-selector',
  templateUrl: './professor-selector.component.html',
  styleUrls: ['./professor-selector.component.css']
})
export class ProfessorSelectorComponent implements OnInit, ConfigurableInput {

  formControl = new FormControl('');

  constructor() { }

  ngOnInit(): void {
  }

  applyArguments(args) {
  }

  getFormControl() {
    return this.formControl;
  }



}
