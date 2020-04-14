import {Component, OnInit, ViewChild} from '@angular/core';
import {UserType} from '../../../../global-models/UserType';
import {MatTableDataSource} from '@angular/material/table';
import {User} from '../../../../global-models/User';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {BackendService} from '../../../../global-services/backend/backend.service';
import {Router} from '@angular/router';
import {SessionService} from '../../../../global-services/session/session.service';

@Component({
  selector: 'app-view-student',
  templateUrl: './view-student.component.html',
  styleUrls: ['./view-student.component.css']
})
export class ViewStudentComponent implements OnInit {

  userType = UserType;
  displayedColumns: string[] = ['name', 'type', 'course'];
  dataSource: MatTableDataSource<User>;

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  constructor(
    private backend: BackendService,
    private router: Router,
    private sessionService: SessionService
  ) {

  }

  ngOnInit() {
    this.backend.getAll('users').then(data => {

      data = data.filter(v => v.type === UserType.STUDENT);
      console.log(data);

      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;

    });

  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  viewDetails(row: any) {
    this.router.navigate(['/coordinator','details', 'student', row._id], {state: {route: this.router.url}});

  }
}
