import { Component, OnInit } from '@angular/core';
import {DisciplineService} from '../../modules/coordinator/services/discipline/discipline.service';
import {ClassService} from '../../modules/coordinator/services/class/class.service';

@Component({
  selector: 'app-class-discipline-view',
  templateUrl: './class-discipline-view.component.html',
  styleUrls: ['./class-discipline-view.component.css']
})
export class ClassDisciplineViewComponent implements OnInit{

  disciplines;
  defaultValue;
  data;

  constructor(
    private disciplineService: DisciplineService,
    private classService: ClassService
  ) { }

  ngOnInit(): void {
    this.loadData();
  }


  async loadData(){
    let _class = await this.classService.queryOne(this.data.params.id);

    let disciplines = await this.disciplineService.getAll();

    this.disciplines = disciplines.filter(v => v.period === _class.period);
  }

  getData(){

  }

}
