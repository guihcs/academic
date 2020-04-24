import { Component, OnInit } from '@angular/core';
import {ConfigurableInput} from '../../../../libs/dynamic-forms/models/configurable-input';
import {FormControl} from '@angular/forms';
import {DisciplineService} from '../../services/discipline/discipline.service';

@Component({
  selector: 'app-professor-disciplines',
  templateUrl: './professor-disciplines.component.html',
  styleUrls: ['./professor-disciplines.component.css']
})
export class ProfessorDisciplinesComponent implements OnInit, ConfigurableInput {

  formControl = new FormControl();
  disciplines;
  defaultValue;

  constructor(private disciplineService: DisciplineService) { }

  ngOnInit(): void {
    this.disciplineService.getAll().then(data => {
      this.disciplines = data.filter(v => v.professor?.name === this.defaultValue);

    });
  }

  applyArguments(args) {
    this.defaultValue = args.defaultValue;

  }

  getFormControl() {
    return this.formControl;
  }




}
