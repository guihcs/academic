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
  control = new FormControl();
  users = [];
  defaultValue;

  constructor(private backendService: BackendService) {
  }

  ngOnInit(): void {
    this.formControl.valueChanges.subscribe(value => {
      if(value) this.control.setValue({id: value._id, name: value.name});
    });
  }

  applyArguments(args: any): any {

    this.backendService.getAll('users').then(
      v => {
        this.users = v.filter(v => v.type === args.descriptor.args.type);

        if (args.defaultValue){
          this.defaultValue = args.defaultValue;
          this.formControl.setValue(v.find(u => {
            return u._id === this.defaultValue.id;
          }))

        }
      }
    );





  }

  getFormControl(): any {
    return this.control;
  }

}
