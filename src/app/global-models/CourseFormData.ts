import {FormInput} from '@guihss/ngx-dynamic-forms';


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
