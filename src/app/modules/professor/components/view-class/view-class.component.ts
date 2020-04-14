import {Component, OnInit} from '@angular/core';
import {BackendService} from '../../../../global-services/backend/backend.service';
import {Router} from '@angular/router';
import {SessionService} from '../../../../global-services/session/session.service';
import {fromPromise} from 'rxjs/internal-compatibility';

@Component({
  selector: 'app-view-class',
  templateUrl: './view-class.component.html',
  styleUrls: ['./view-class.component.css']
})
export class ViewClassComponent implements OnInit {

  title = 'View Class';
  placeholder = 'Name, Email or Course';

  columnsDef = [
    {field: 'name', header: 'Name'},
    {field: 'period', header: 'Period'}
  ];

  data;

  constructor(
    private backend: BackendService,
    private sessionService: SessionService,
    private router: Router
  ) {
  }

  ngOnInit() {

    this.data = fromPromise(
    (async () => {
      let disciplines = await this.backend.getAll('subjects');
      let classes = await this.backend.getAll('classes');

      let periods = disciplines
        .filter(d => d.professor.name === this.sessionService.getSession().name)
        .map(v => v.period);

      return classes.filter(c => {
        return periods.includes(c.period);
      });

    })());
  }

  viewDetails(row: any) {
    this.router.navigate(['/professor', 'details', 'class', row._id], {state: {route: this.router.url}});
  }
}

