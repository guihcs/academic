import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {FormBuilder} from '@angular/forms';
import {Professor} from '../../../../../models/Professor';
import {ProfessorService} from '../../../services/professor.service';

@Component({
  selector: 'app-professor-details',
  templateUrl: './professor-details.component.html',
  styleUrls: ['./professor-details.component.css']
})
export class ProfessorDetailsComponent implements OnInit {

  professor: Professor;

  constructor(
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private professorService: ProfessorService
  ) {
  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    for (const coordinator1 of this.professorService.getUsers()) {
      if (coordinator1.cpf === id) {
        this.professor = coordinator1;
        break;
      }
    }
  }


  update() {

  }

}
