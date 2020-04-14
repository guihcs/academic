import {FormInput} from '../libs/dynamic-forms/models/form-metadata';
import {Course} from './Course';


export class Class {

  _id;

  @FormInput({
    label: 'Name'
  })
  name;

  @FormInput({
    label: 'Period'
  })
  period;


  course = new Course();

}
