import {FormInput} from '../libs/dynamic-forms/models/form-metadata';


export class Class {

  @FormInput({
    label: 'Period'
  })
  period;
  @FormInput({
    label: 'Name'
  })
  name;

}
