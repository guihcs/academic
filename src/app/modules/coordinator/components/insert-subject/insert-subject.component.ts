import {AfterViewInit, ChangeDetectorRef, Component, OnInit, ViewChild} from '@angular/core';
import {DynamicFormsComponent} from '../../../../libs/dynamic-forms/dynamic-forms.component';
import {CourseSelectComponent} from '../../../admin/components/course-select/course-select.component';
import {BehaviorSubject} from 'rxjs';
import {User} from '../../../../global-models/User';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {UserService} from '../../../../global-services/user/user.service';
import {MatSnackBar} from '@angular/material/snack-bar';
import {assign, toPascalCase} from '../../../../utils/utils';
import {UserType} from '../../../../global-models/UserType';
import {Discipline} from '../../../../global-models/Discipline';
import {Student} from '../../../../global-models/Student';
import {SessionService} from '../../../../global-services/session/session.service';
import {BackendService} from '../../../../global-services/backend/backend.service';

@Component({
  selector: 'app-insert-subject',
  templateUrl: './insert-subject.component.html',
  styleUrls: ['./insert-subject.component.css']
})
export class InsertSubjectComponent implements OnInit, AfterViewInit {

  @ViewChild('userForm') formContainer: DynamicFormsComponent;
  userType;
  pageTitle;
  user: BehaviorSubject<Discipline> = new BehaviorSubject(new Discipline());
  course;

  constructor(private route: ActivatedRoute,
              private backend: BackendService,
              private changeDetectorRef: ChangeDetectorRef,
              private snackBar: MatSnackBar,
              private sessionService: SessionService
  ) {
  }

  ngOnInit(): void {

  }

  ngAfterViewInit(): void {
    this.route.paramMap.subscribe(map => this.updateForm(map));
    this.course = this.sessionService.getSession().course;
    this.changeDetectorRef.detectChanges();
  }

  async prepareSubjectData() {
    let userData = this.formContainer.getResult();
    let user = new Discipline();
    userData.course = this.course;
    assign(user, userData, 2);

    await this.saveUserAPI(user);
  }

  isValid() {
    if (this.formContainer) {
      return this.formContainer.isValid();
    }

    return false;
  }

  private updateForm(map: ParamMap) {
    this.userType = +map.get('userType');
    this.pageTitle = 'Insert ' + toPascalCase(UserType[this.userType]);
    this.formContainer.reset();
    this.changeDetectorRef.detectChanges();
  }

  private async saveUserAPI(discipline) {

    if (await this.backend.persist('subjects', discipline)) {
      this.formContainer.reset();
      this.snackBar.open('User Inserted.', '', {
        duration: 2000
      });
    } else {
      this.snackBar.open('Error.');
    }
  }

}
