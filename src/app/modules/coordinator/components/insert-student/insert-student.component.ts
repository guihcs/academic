import {ChangeDetectorRef, Component, OnInit, ViewChild} from '@angular/core';
import {DynamicFormsComponent} from '../../../../libs/dynamic-forms/dynamic-forms.component';
import {CourseSelectComponent} from '../../../admin/components/course-select/course-select.component';
import {BehaviorSubject} from 'rxjs';
import {User} from '../../../../global-models/User';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {UserService} from '../../../../global-services/user/user.service';
import {MatSnackBar} from '@angular/material/snack-bar';
import {assign, toPascalCase} from '../../../../utils/utils';
import {UserType} from '../../../../global-models/UserType';
import {Student} from '../../../../global-models/Student';
import {BackendService} from '../../../../global-services/backend/backend.service';
import {SessionService} from '../../../../global-services/session/session.service';

@Component({
  selector: 'app-insert-student',
  templateUrl: './insert-student.component.html',
  styleUrls: ['./insert-student.component.css']
})
export class InsertStudentComponent implements OnInit {

  @ViewChild('userForm') formContainer: DynamicFormsComponent;
  userType;
  pageTitle;
  user: BehaviorSubject<Student> = new BehaviorSubject(new Student());
  studentClass;
  classes;

  constructor(private route: ActivatedRoute,
              private userService: UserService,
              private changeDetectorRef: ChangeDetectorRef,
              private snackBar: MatSnackBar,
              private backendService: BackendService,
              private sessionService: SessionService
  ) {
  }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.route.paramMap.subscribe(map => this.updateForm(map));
    this.backendService.getAll('classes').then(c => {

      this.classes = c.filter(v => v.course?.name === this.sessionService.getSession().course?.name);
    });
  }

  async saveUser() {
    let userData = this.formContainer.getResult();
    let user = new Student();
    user.class = this.studentClass;
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
    //todo reset class selector
    this.changeDetectorRef.detectChanges();
  }

  private async saveUserAPI(user: User) {
    if (await this.userService.saveUser(user)) {
      this.formContainer.reset();
      this.snackBar.open('User Inserted.', '', {
        duration: 2000
      });
    } else {
      this.snackBar.open('Error.');
    }
  }

}
