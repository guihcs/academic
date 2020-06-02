import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {BackendService} from '../../../../global-services/backend/backend.service';
import {FormControl, FormGroup} from '@angular/forms';
import {Session} from 'inspector';
import {SessionService} from '../../../../global-services/session/session.service';

@Component({
  selector: 'app-password-creator',
  templateUrl: './password-creator.component.html',
  styleUrls: ['./password-creator.component.css']
})
export class PasswordCreatorComponent implements OnInit {

  formGroup = new FormGroup({
    password: new FormControl(''),
    confirm: new FormControl(''),
  });

  constructor(
    private activatedRoute: ActivatedRoute,
    private sessionService: SessionService
  ) { }

  ngOnInit(): void {
  }


  async confirm(){
    let id = this.activatedRoute.snapshot.params.id;
    let password = this.formGroup.value.password;

    await this.sessionService.activate(id, password);
  }
}
