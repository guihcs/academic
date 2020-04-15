import { Component, OnInit } from '@angular/core';
import {BackendService} from '../../../../global-services/backend/backend.service';
import {Router} from '@angular/router';
import {fromPromise} from 'rxjs/internal-compatibility';
import {filter, map} from 'rxjs/operators';
import {SessionService} from '../../../../global-services/session/session.service';

@Component({
  selector: 'app-view-disciplines',
  templateUrl: './view-disciplines.component.html',
  styleUrls: ['./view-disciplines.component.css']
})
export class ViewDisciplinesComponent implements OnInit {

  title = 'View Disciplines';
  placeholder = 'Name, Email or Course';

  columnsDef = [
    {field: 'name', header: 'Name'}
  ];

  data;

  constructor(
    private backend: BackendService,
    private sessionService: SessionService,
    private router: Router
  ) {
  }

  ngOnInit() {

    this.data = fromPromise(this.backend.getAll('subjects')).pipe(map(v => {

      return v.filter(d => {
        return d.professor.id === this.sessionService.getSession()._id;
      });
    }));

  }

  viewDetails(row: any) {
    this.router.navigate(['/professor', 'details', 'discipline', row._id], {state: {route: this.router.url}});
  }
}

