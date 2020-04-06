import {Component, OnInit} from '@angular/core';
import {ErrorStateMatcher} from '@angular/material/core';
import {FormBuilder, FormControl, FormGroupDirective, NgForm} from '@angular/forms';
import {Router} from '@angular/router';
import {SessionService} from '../../services/session/session.service';

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
    private loginService: SessionService
  ) {
    if (this.loginService.getSession()) {
      this.router.navigate(['/home']);
    }
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
    if (await this.loginService.login(loginData)) {
      await this.router.navigate(['/home']);
    } else {
      this.errorMatcher.state = true;
      this.passwordErrorMessage = 'Invalid login or password.';
      this.havePasswordError = true;
    }

  }
}
