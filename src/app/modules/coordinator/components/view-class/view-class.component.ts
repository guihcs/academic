import {Component, OnInit, ViewChild} from '@angular/core';
import {BackendService} from '../../../../global-services/backend/backend.service';
import {Router} from '@angular/router';
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
    private router: Router
  ) {
  }

  ngOnInit() {
    this.data = fromPromise(this.backend.getAll('classes'));
  }

  viewDetails(row: any) {
    this.router.navigate(['/coordinator', 'details', 'class', row._id], {state: {route: this.router.url}});
  }
}



