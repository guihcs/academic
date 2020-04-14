import {Component, OnInit, ViewChild} from '@angular/core';
import {UserType} from '../../../../global-models/UserType';
import {MatTableDataSource} from '@angular/material/table';
import {User} from '../../../../global-models/User';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {BackendService} from '../../../../global-services/backend/backend.service';
import {Router} from '@angular/router';
import {SessionService} from '../../../../global-services/session/session.service';
import {fromPromise} from 'rxjs/internal-compatibility';
import {StudentService} from '../../services/student/student.service';

@Component({
  selector: 'app-view-student',
  templateUrl: './view-student.component.html',
  styleUrls: ['./view-student.component.css']
})
export class ViewStudentComponent implements OnInit {

  title = 'View Student';
  placeholder = 'Name, Email or Course';

  columnsDef = [
    {field: 'name', header: 'Name'},
    {field: 'className', header: 'Class'},
    {field: 'classPeriod', header: 'Class Period'}
  ];

  data;

  constructor(
    private studentService: StudentService,
    private sessionService: SessionService,
    private router: Router
  ) {
  }

  ngOnInit() {
    this.data = fromPromise(this.studentService.getAll(this.sessionService.getSession().course));
  }

  viewDetails(row: any) {
    this.router.navigate(['/coordinator', 'details', 'student', row._id], {state: {route: this.router.url}});
  }
}
