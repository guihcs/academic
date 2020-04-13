import {Component, OnInit, ViewChild} from '@angular/core';
import {UserType} from '../../../../global-models/UserType';
import {MatTableDataSource} from '@angular/material/table';
import {User} from '../../../../global-models/User';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {BackendService} from '../../../../global-services/backend/backend.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-view-class',
  templateUrl: './view-class.component.html',
  styleUrls: ['./view-class.component.css']
})
export class ViewClassComponent implements OnInit {

  userType = UserType;
  displayedColumns: string[] = ['name', 'type', 'course'];
  dataSource: MatTableDataSource<User>;

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  constructor(
    private backend: BackendService,
    private router: Router
  ) {

  }

  ngOnInit() {
    this.backend.getAll('users').then(data => {
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
      this.dataSource.filterPredicate = (data1, filter) => {

        let serializeFields = [];
        for (const displayedColumn of this.displayedColumns) {
          if (displayedColumn === 'type'){
            serializeFields.push(UserType[data1[displayedColumn]]);
          } else if (displayedColumn === 'course'){
            serializeFields.push(data1[displayedColumn]?.name);
          } else {
            serializeFields.push(data1[displayedColumn]);
          }

        }

        return serializeFields.join('').toLocaleLowerCase().indexOf(filter) >= 0;
      };
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
    if (row.type === UserType.COORDINATOR){
      this.router.navigate(['/admin','details', 'coordinator', row._id], {state: {route: this.router.url}});

    }else {

      this.router.navigate(['/admin','details', row._id], {state: {route: this.router.url}});
    }
  }
}
