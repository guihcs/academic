import {FormInput} from '@guihss/ngx-dynamic-forms';


export class Exam {
  _id?;
  @FormInput({
    label: 'Date',
    type: 'date'
  })
  date;
  @FormInput({
    label: 'Time',
    type: 'time'
  })
  time;
  @FormInput({
    label: 'Local'
  })
  local;
  @FormInput({
    label: 'Courses'
  })
  courses;
}
