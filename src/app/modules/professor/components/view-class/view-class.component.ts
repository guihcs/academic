import {Component, OnInit, ViewChild} from '@angular/core';
import {UserType} from '../../../../global-models/UserType';
import {MatTableDataSource} from '@angular/material/table';
import {User} from '../../../../global-models/User';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {BackendService} from '../../../../global-services/backend/backend.service';
import {Router} from '@angular/router';
import {Class} from '../../../../global-models/Class';

@Component({
  selector: 'app-view-class',
  templateUrl: './view-class.component.html',
  styleUrls: ['./view-class.component.css']
})
export class ViewClassComponent implements OnInit {

  userType = UserType;
  displayedColumns: string[] = ['name'];
  dataSource: MatTableDataSource<Class>;

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  constructor(
    private backend: BackendService,
    private router: Router
  ) {

  }

  ngOnInit() {
    this.backend.getAll('classes').then(data => {
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
    this.router.navigate(['/professor','details', 'class', row._id], {state: {route: this.router.url}});

  }
}
