import { Component, OnInit } from '@angular/core';
import {DisciplineService} from '../../modules/coordinator/services/discipline/discipline.service';
import {ConfigurableInput} from '../../libs/dynamic-forms/models/configurable-input';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-class-discipline-view',
  templateUrl: './class-discipline-view.component.html',
  styleUrls: ['./class-discipline-view.component.css']
})
export class ClassDisciplineViewComponent implements OnInit, ConfigurableInput {

  formControl = new FormControl();
  disciplines;
  defaultValue;

  constructor(private disciplineService: DisciplineService) { }

  ngOnInit(): void {
    this.disciplineService.getAll().then(data => {
      if (this.defaultValue){
        this.disciplines = data.filter(v => v.period === this.defaultValue);
      }

    });
  }

  applyArguments(args) {
    this.defaultValue = args.defaultValue;

  }

  getFormControl() {
    return this.formControl;
  }



}
