import {FormInput} from '../../../libs/dynamic-forms/models/form-metadata';

export class DisciplineDetails {

  @FormInput({
    label: 'Name'
  })
  name: string;

  @FormInput({
    label: 'Period'
  })
  period: string;

  professor;
  course;

  get professorName(){
    return this.professor?.name;
  }

}
