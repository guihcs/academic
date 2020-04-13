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
import {Professor} from '../../../../global-models/Professor';

@Component({
  selector: 'app-insert-professor',
  templateUrl: './insert-professor.component.html',
  styleUrls: ['./insert-professor.component.css']
})
export class InsertProfessorComponent implements OnInit {

  @ViewChild('userForm') formContainer: DynamicFormsComponent;
  @ViewChild('courseSelect') courseSelect: CourseSelectComponent;
  userType;
  pageTitle;
  user: BehaviorSubject<Professor> = new BehaviorSubject(new Professor());

  constructor(private route: ActivatedRoute,
              private userService: UserService,
              private changeDetectorRef: ChangeDetectorRef,
              private snackBar: MatSnackBar
  ) {
  }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.route.paramMap.subscribe(map => this.updateForm(map));
  }

  async saveUser() {
    let userData = this.formContainer.getResult();
    let user = new User();
    userData.type = +this.userType;
    userData.course = this.courseSelect.formControl.value;
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
    this.courseSelect.formControl.setValue('');
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
