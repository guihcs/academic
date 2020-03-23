import {FormInput} from '../services/input-builder/form-metadata';

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
