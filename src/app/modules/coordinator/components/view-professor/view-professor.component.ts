import {Component, OnInit, ViewChild} from '@angular/core';
import {UserProfile} from '../../../../global-models/user/UserProfile';
import {MatTableDataSource} from '@angular/material/table';
import {UserFormData} from '../../../../global-models/user/UserFormData';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {BackendService} from '../../../../global-services/backend/backend.service';
import {Router} from '@angular/router';
import {SessionService} from '../../../../global-services/session/session.service';
import {fromPromise} from 'rxjs/internal-compatibility';
import {filter, map} from 'rxjs/operators';
import {ProfessorService} from '../../services/professor/professor.service';

@Component({
  selector: 'app-view-professor',
  templateUrl: './view-professor.component.html',
  styleUrls: ['./view-professor.component.css']
})
export class ViewProfessorComponent implements OnInit {

  title = 'View Professors';
  placeholder = 'Name, Email or Course';
  detailsRoute = '/coordinator/details/professor';

  columnsDef = [
    {field: 'name', header: 'Name'},
    {field: 'userType', header: 'Profile'}
  ];

  data;

  constructor(
    private professorService: ProfessorService,
    private router: Router
  ) {

  }

  ngOnInit() {
    this.data = fromPromise(this.professorService.getAll());
  }

  filter(data1, filter){
    let serializeFields = [];
    for (const displayedColumn of this.columnsDef) {
      if (displayedColumn.field === 'type'){
        serializeFields.push(UserProfile[data1[displayedColumn.field]]);
      } else if (displayedColumn.field === 'course'){
        serializeFields.push(data1[displayedColumn.field]?.name);
      } else {
        serializeFields.push(data1[displayedColumn.field]);
      }
    }
    return serializeFields.join('').toLocaleLowerCase().indexOf(filter) >= 0;
  }

}
