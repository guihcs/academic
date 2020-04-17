import {CustomInput, FormInput} from '../libs/dynamic-forms/models/form-metadata';
import {ProfessorSelectorComponent} from '../modules/coordinator/components/professor-selector/professor-selector.component';


export class DisciplineDetails {

  @FormInput({
    label: 'Name'
  })
  name: string;

  @FormInput({
    label: 'Period'
  })
  period: string;

  @CustomInput(ProfessorSelectorComponent, {
    label: 'Professor'
  })
  professor;
  course;

  get professorName(){
    return this.professor?.name;
  }

}
