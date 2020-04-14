import {Component, OnInit} from '@angular/core';
import {BackendService} from '../../../../global-services/backend/backend.service';
import {Router} from '@angular/router';
import {fromPromise} from 'rxjs/internal-compatibility';

@Component({
  selector: 'app-view-subject',
  templateUrl: './view-subject.component.html',
  styleUrls: ['./view-subject.component.css']
})
export class ViewSubjectComponent implements OnInit {
  title = 'View Subject';
  placeholder = 'Name, Email or Course';

  columnsDef = [
    {field: 'name', header: 'Name'}
  ];

  data;

  constructor(
    private backend: BackendService,
    private router: Router
  ) {
  }

  ngOnInit() {
    this.data = fromPromise(this.backend.getAll('subjects'));
  }

  viewDetails(row: any) {
    this.router.navigate(['/coordinator', 'details', 'subject', row._id], {state: {route: this.router.url}});
  }
}

