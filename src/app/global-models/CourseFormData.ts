
import {CustomInput, FormInput} from '../libs/dynamic-forms/models/form-metadata';


export class CourseFormData {

  @FormInput({
    label: 'Name'
  })
  name: string;
  @FormInput({
    label: 'Area',
    type: 'select',
    args: ['Human', 'Exact']
  })
  area: string;


  _id: any;


}
