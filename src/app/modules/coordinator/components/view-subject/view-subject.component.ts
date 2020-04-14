import {Component, OnInit} from '@angular/core';
import {BackendService} from '../../../../global-services/backend/backend.service';
import {Router} from '@angular/router';
import {fromPromise} from 'rxjs/internal-compatibility';
import {map} from 'rxjs/operators';
import {Discipline} from '../../../../global-models/Discipline';
import {assign} from '../../../../utils/utils';

@Component({
  selector: 'app-view-subject',
  templateUrl: './view-subject.component.html',
  styleUrls: ['./view-subject.component.css']
})
export class ViewSubjectComponent implements OnInit {
  title = 'View Disciplines';
  placeholder = 'Name, Email or Course';

  columnsDef = [
    {field: 'name', header: 'Name'},
    {field: 'period', header: 'Period'},
    {field: 'professorName', header: 'Professor'}
  ];

  data;

  constructor(
    private backend: BackendService,
    private router: Router
  ) {
  }

  ngOnInit() {
    this.data = fromPromise(this.backend.getAll('subjects')).pipe(map(v => {
      let disciplines = [];

      for (const vElement of v) {
        let discipline = new Discipline();
        assign(discipline, vElement, 2);
        disciplines.push(discipline);
      }

      return disciplines;
    }));

  }

  viewDetails(row: any) {
    this.router.navigate(['/coordinator', 'details', 'subject', row._id], {state: {route: this.router.url}});
  }
}

