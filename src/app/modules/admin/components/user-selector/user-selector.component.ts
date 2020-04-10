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
  users = [];

  constructor(private backendService: BackendService) {
  }

  ngOnInit(): void {
  }

  applyArguments(args: any): any {

    this.backendService.getAll('users').then(
      v => {
        this.users = v.filter(v => v.type === args.descriptor.args.type);
      }
    );

  }

  getFormControl(): any {
    return this.formControl;
  }

}
