import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroupDirective, NgForm} from '@angular/forms';
import {Router} from '@angular/router';
import {SessionService} from '../../global-services/session/session.service';
import {ErrorStateMatcher} from '@angular/material/core';
import {UserProfile} from '../../global-models/user/UserProfile';

export class ErrorMatcher implements ErrorStateMatcher {
  state;

  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    return this.state;
  }
}


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm;
  haveLoginError;
  loginErrorMessage;
  havePasswordError;
  passwordErrorMessage;
  errorMatcher = new ErrorMatcher();

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private sessionService: SessionService
  ) {
  }

  ngOnInit(): void {


    this.loginForm = this.formBuilder.group({
      email: '',
      password: ''
    });

  }

  async login(loginData) {
    this.havePasswordError = false;
    this.errorMatcher.state = false;
    if (await this.sessionService.login(loginData)) {
      let session = this.sessionService.getSession();

      switch (session.type) {
        case UserProfile.ADMIN: {
          await this.router.navigate(['/admin']);
          break;
        }
        case UserProfile.COORDINATOR: {
          await this.router.navigate(['/coordinator']);
          break;
        }
        case UserProfile.PROFESSOR: {
          await this.router.navigate(['/professor']);
          break;
        }
        case UserProfile.STUDENT: {
          await this.router.navigate(['/student']);
          break;
        }
      }
    } else {
      this.errorMatcher.state = true;
      this.passwordErrorMessage = 'Invalid login or password.';
      this.havePasswordError = true;
    }

  }
}
