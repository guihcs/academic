import { Component, OnInit } from '@angular/core';
import {BackendService} from '../../../../global-services/backend/backend.service';
import {SessionService} from '../../../../global-services/session/session.service';
import {ConfigurableInput} from '../../../../libs/dynamic-forms/models/configurable-input';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-class-selector',
  templateUrl: './class-selector.component.html',
  styleUrls: ['./class-selector.component.css']
})
export class ClassSelectorComponent implements OnInit, ConfigurableInput {

  formControl = new FormControl();
  classes;

  constructor(
    private backendService: BackendService,
    private sessionService: SessionService
  ) { }

  ngOnInit(): void {
    this.backendService.getAll('classes').then(c => {

      this.classes = c.filter(v => v.course?.name === this.sessionService.getSession().course?.name);
    });
  }

  applyArguments(args) {
  }

  getFormControl() {
    return this.formControl;
  }




}
