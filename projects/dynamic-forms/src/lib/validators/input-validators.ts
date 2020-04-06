import {FormControl, Validators} from '@angular/forms';


export class InputValidators {
  static validatorsMap = {
    'email': {
      validators: [Validators.required, Validators.email],
      getErrorMessage: (form: FormControl) => {
        if (form.hasError('required')) {
          return 'Fill a email.';
        }
        if (form.hasError('email')) {
          return 'Invalid email.';
        }
      }
    },
    'password': {
      validators: [Validators.required, Validators.minLength(6)],
      getErrorMessage: (form: FormControl) => {
        if (form.hasError('minlength')) {
          return 'Password is too short.';
        }
      }
    },
    'cpf': {
      validators: [Validators.required, Validators.minLength(11), Validators.maxLength(11)],
      getErrorMessage: (form: FormControl) => {
        return 'Invalid cpf.';
      }
    }
  }
}
