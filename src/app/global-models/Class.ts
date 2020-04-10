import {FormInput} from 'dynamic-forms';


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
