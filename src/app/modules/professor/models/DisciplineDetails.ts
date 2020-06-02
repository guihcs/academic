import {FormInput} from '@guihss/ngx-dynamic-forms';

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
