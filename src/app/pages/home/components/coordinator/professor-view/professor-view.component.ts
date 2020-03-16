import {Component, OnInit} from '@angular/core';
import {BehaviorSubject, Subject} from 'rxjs';
import {Router} from '@angular/router';
import {ProfessorService} from '../../../services/professor.service';
import {Professor} from '../../../../../models/Professor';

@Component({
  selector: 'app-professor-view',
  templateUrl: './professor-view.component.html',
  styleUrls: ['./professor-view.component.css']
})
export class ProfessorViewComponent implements OnInit {

  professorSubject: Subject<Professor[]>;

  constructor(private router: Router, private professorService: ProfessorService) {
  }

  ngOnInit(): void {
    this.professorSubject = new BehaviorSubject<Professor[]>(this.professorService.getUsers());


  }

  details(element) {
    this.router.navigate(['home/details/professor', element.cpf]);
  }

  delete(element) {
    this.professorService.deleteUser(element);
    this.professorSubject.next(this.professorService.getUsers());
  }
}
