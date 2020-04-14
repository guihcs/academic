import {AfterViewInit, ChangeDetectorRef, Component, OnInit, ViewChild} from '@angular/core';
import {DynamicFormsComponent} from '../../../../libs/dynamic-forms/dynamic-forms.component';
import {BehaviorSubject} from 'rxjs';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {MatSnackBar} from '@angular/material/snack-bar';
import {assign, toPascalCase} from '../../../../utils/utils';
import {UserType} from '../../../../global-models/UserType';
import {Class} from '../../../../global-models/Class';
import {BackendService} from '../../../../global-services/backend/backend.service';
import {SessionService} from '../../../../global-services/session/session.service';

@Component({
  selector: 'app-insert-class',
  templateUrl: './insert-class.component.html',
  styleUrls: ['./insert-class.component.css']
})
export class InsertClassComponent implements OnInit, AfterViewInit {

  @ViewChild('userForm') formContainer: DynamicFormsComponent;
  userType;
  pageTitle;
  user: BehaviorSubject<Class> = new BehaviorSubject(new Class());
  course;

  constructor(private route: ActivatedRoute,
              private backendService: BackendService,
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

  async saveClass() {
    let classData = this.formContainer.getResult();
    let user = new Class();
    user.course = this.sessionService.getSession().course;
    assign(user, classData, 2);

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

  private async saveUserAPI(user) {

    if (await this.backendService.persist('classes', user)) {
      this.formContainer.reset();
      this.snackBar.open('User Inserted.', '', {
        duration: 2000
      });
    } else {
      this.snackBar.open('Error.');
    }
  }

}
