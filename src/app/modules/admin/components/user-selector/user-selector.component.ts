import {Component, OnInit} from '@angular/core';
import {FormControl} from '@angular/forms';
import {BackendService} from '../../../../global-services/backend/backend.service';
import {ConfigurableInput} from '../../../../libs/dynamic-forms/models/configurable-input';

@Component({
  selector: 'app-user-selector',
  templateUrl: './user-selector.component.html',
  styleUrls: ['./user-selector.component.css']
})
export class UserSelectorComponent implements OnInit, ConfigurableInput {

  formControl = new FormControl();
  users;
  defaultValue;

  constructor(private backendService: BackendService) {
  }

  ngOnInit(): void {
    this.users = this.backendService.getAll('users');
  }

  applyArguments(args: any): any {



  }

  getFormControl(): any {
    return this.formControl;
  }

}
