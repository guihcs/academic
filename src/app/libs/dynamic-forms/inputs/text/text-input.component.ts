import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {ConfigurableInput} from '../../models/configurable-input';
import {FormControl} from '@angular/forms';
import {InputValidators} from '../../validators/input-validators';

@Component({
  selector: 'lib-text',
  templateUrl: './text-input.component.html',
  styleUrls: ['./text-input.component.css']
})
export class TextInputComponent implements OnInit, ConfigurableInput {

  args;
  formControl: FormControl = new FormControl('');
  validator;

  constructor(private changeDetectorRef: ChangeDetectorRef) {
  }

  ngOnInit(): void {
  }

  applyArguments(args) {
    this.args = args;

    if (args.descriptor.type) {
      this.validator = InputValidators.validatorsMap[args.descriptor.type];

      if (this.validator) {
        this.formControl.setValidators(this.validator.validators);
      }

    }

    if (args.defaultValue) {
      this.formControl.setValue(args.defaultValue);
    }

    this.changeDetectorRef.detectChanges();
  }

  getFormControl() {
    return this.formControl;
  }

  getErrorMessage() {
    if (this.validator) {
      return this.validator.getErrorMessage(this.formControl);
    }
    return 'Error.';
  }

}
