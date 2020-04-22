import {Component, OnInit, ViewChild} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {Class} from '../../../../global-models/Class';
import {DynamicFormsComponent} from '../../../../libs/dynamic-forms/dynamic-forms.component';
import {ActivatedRoute, Router} from '@angular/router';
import {BackendService} from '../../../../global-services/backend/backend.service';
import {MatSnackBar} from '@angular/material/snack-bar';
import {MatDialog} from '@angular/material/dialog';
import {assign} from '../../../../utils/utils';
import {UserProfile} from '../../../../global-models/user/UserProfile';
import {ConfirmDeleteDialogComponent} from '../../../../templates/confirm-delete-dialog/confirm-delete-dialog.component';
import {SessionService} from '../../../../global-services/session/session.service';

@Component({
  selector: 'app-class-details',
  templateUrl: './class-details.component.html',
  styleUrls: ['./class-details.component.css']
})
export class ClassDetailsComponent implements OnInit {


  user: BehaviorSubject<Class> = new BehaviorSubject<Class>(null);
  pageTitle;
  @ViewChild('userForm')
  private userForm: DynamicFormsComponent;
  private backUrl;
  private userID;

  disciplines;
  students;
  class;

  constructor(
    private activatedRoute: ActivatedRoute,
    private backend: BackendService,
    private sessionService: SessionService,
    private router: Router,
    private snackBar: MatSnackBar,
    private dialog: MatDialog
  ) {
    activatedRoute.paramMap.subscribe(async paramMap => {
      this.userID = paramMap.get('id');
      let rawData = await this.backend.query('classes', this.userID);
      let class1 = new Class();
      assign(class1, rawData[0], 2);
      this.class = class1;

      this.backUrl = history.state.route;

      let all = await this.backend.getAll('subjects');

      this.disciplines = all.filter(v => {
        return v.period === class1.period && v.course.name === class1.course.name && v.professor.name === this.sessionService.getSession().name;
      });

      let users = await this.backend.getAll('users');
      this.students = users.filter(v => {
        return v.type === UserProfile.STUDENT && v.class.name === class1.name;
      });
    });
  }

  ngOnInit(): void {
  }


  backToList() {
    this.router.navigate([this.backUrl]);
  }



}
