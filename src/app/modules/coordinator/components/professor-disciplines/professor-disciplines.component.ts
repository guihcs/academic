import { Component, OnInit } from '@angular/core';
import {DisciplineService} from '../../services/discipline/discipline.service';
import {ProfessorService} from '../../services/professor/professor.service';

@Component({
  selector: 'app-professor-disciplines',
  templateUrl: './professor-disciplines.component.html',
  styleUrls: ['./professor-disciplines.component.css']
})
export class ProfessorDisciplinesComponent implements OnInit {

  disciplines;
  data;

  constructor(
    private disciplineService: DisciplineService,
    private professorService: ProfessorService
  ) { }

  ngOnInit(): void {

    this.loadData();
  }

  async loadData(){
    let professor = await this.professorService.queryOne(this.data.params.id);
    let disciplines = await this.disciplineService.getAll();
    this.disciplines = disciplines.filter(v => v.professor?.name === professor.name);
  }

  getData(){

  }

}
