import {CourseFormData} from './CourseFormData';
import {FormInput} from '@guihss/ngx-dynamic-forms';

export class ClassFormData {

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
