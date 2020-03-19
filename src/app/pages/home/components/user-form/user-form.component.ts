import {AfterViewInit, ChangeDetectorRef, Component, OnInit, ViewChild} from '@angular/core';
import {User, UserFormDescriptor} from '../../../../models/User';
import {UserService} from '../../../../services/user/user.service';
import {ActivatedRoute} from '@angular/router';
import {UserType} from '../../../../models/UserType';
import {DynamicFormComponent} from '../../../../components/dynamic-form/dynamic-form.component';
import {Profile} from '../../../../models/Profile';
import {Address} from '../../../../models/Address';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit, AfterViewInit {

  @ViewChild('userForm') userForm: DynamicFormComponent;
  userType;
  title;
  user: User = new User();
  formDescriptor = new UserFormDescriptor();

  constructor(private route: ActivatedRoute,
              private userService: UserService,
              private changeDetectorRef: ChangeDetectorRef
  ) {
  }

  ngOnInit(): void {

  }

  ngAfterViewInit(): void {
    this.route.paramMap.subscribe(map => {
      this.userType = +map.get('userType');
      this.title = 'Insert ' + UserType[this.userType];
      this.userForm.reset();
      this.changeDetectorRef.detectChanges();
    });

  }


  async saveUser() {
    let userData = this.userForm.getResult();

    let profile = new Profile();
    profile.phone = userData.phone;
    profile.email = userData.email;
    let address = new Address();
    address.state = userData.state;
    address.city = userData.city;
    address.street = userData.street;
    let user = new User();
    user.profile = profile;
    user.address = address;
    user.name = userData.name;
    user.cpf = userData.cpf;
    user.login = userData.login;
    user.password = userData.password;
    user.type = +this.userType;

    await this.userService.saveUser(user);
    this.userForm.reset();
  }

}
