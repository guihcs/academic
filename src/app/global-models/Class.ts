import {FormInput} from '../libs/dynamic-forms/models/form-metadata';
import {Course} from './Course';


export class Class {

  @FormInput({
    label: 'Period'
  })
  period;
  @FormInput({
    label: 'Name'
  })
  name;

  course = new Course();

}
