import {FormInput} from '../libs/dynamic-forms/models/form-metadata';
import {CourseFormData} from './CourseFormData';


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


  course = new CourseFormData();

}
