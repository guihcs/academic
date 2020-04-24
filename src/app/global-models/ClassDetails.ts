import {CustomInput, FormInput, Label} from '../libs/dynamic-forms/models/form-metadata';
import {ClassDisciplineViewComponent} from '../modules/coordinator/components/class-discipline-view/class-discipline-view.component';
import {AbstractControl, ValidatorFn} from '@angular/forms';



export class ClassDetails {

  @Label({
    label: 'Name'
  })
  name;

  @Label({
    label: 'Period'
  })
  period;

  @CustomInput(ClassDisciplineViewComponent, {
    label: 'Disciplines'
  })
  get classPeriod(){
    return this.period;
  }

}
