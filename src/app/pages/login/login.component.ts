import {Component, OnInit} from '@angular/core';
import {FormBuilder} from '@angular/forms';
import {Router} from '@angular/router';
import {LoginService} from '../../services/login/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private loginService: LoginService
  ) {
  }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      login: '',
      password: ''
    });
  }

  async login(loginData) {

    if (this.loginService.login(loginData)) {

      await this.router.navigate(['home']);
    } else {
      console.log('error');
    }

  }
}
