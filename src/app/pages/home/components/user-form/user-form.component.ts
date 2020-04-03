import {AfterViewInit, ChangeDetectorRef, Component, OnInit, ViewChild} from '@angular/core';
import {User} from '../../../../models/User';
import {UserService} from '../../../../services/user/user.service';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {UserType} from '../../../../models/UserType';
import {MatSnackBar} from '@angular/material/snack-bar';
import {assign, toPascalCase} from '../../../../utils/utils';
import {DynamicFormsComponent} from 'dynamic-forms';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit, AfterViewInit {

  @ViewChild('userForm') formContainer: DynamicFormsComponent;
  userType;
  pageTitle;
  user: User = new User();

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

    assign(user, userData, 2);

    if (await this.userService.saveUser(user)) {
      this.formContainer.reset();
      this.snackBar.open('User Inserted.', '', {
        duration: 2000
      });
    } else {
      this.snackBar.open('Error.');
    }
  }

  private updateForm(map: ParamMap) {
    this.userType = +map.get('userType');
    this.pageTitle = 'Insert ' + toPascalCase(UserType[this.userType]);
    this.formContainer.reset();
    this.changeDetectorRef.detectChanges();
  }


}
