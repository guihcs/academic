
import {UserType} from './UserType';
import {CustomInput, FormInput} from '../libs/dynamic-forms/models/form-metadata';
import {ProfessorSelectorComponent} from '../modules/coordinator/components/professor-selector/professor-selector.component';

export class Subject {
  @FormInput({
    label: 'Name'
  })
  name: string;


  @CustomInput(ProfessorSelectorComponent, {
    label: 'Professor',
    args: {
      type: UserType.PROFESSOR
    }
  })
  professor;
}
