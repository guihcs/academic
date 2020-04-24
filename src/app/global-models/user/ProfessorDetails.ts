import {UserDetails} from './UserDetails';
import {CustomInput} from '../../libs/dynamic-forms/models/form-metadata';
import {ProfessorDisciplinesComponent} from '../../modules/coordinator/components/professor-disciplines/professor-disciplines.component';

export class ProfessorDetails extends UserDetails {


  @CustomInput(ProfessorDisciplinesComponent, {
    label: 'Disciplines'
  })
  get professorName(){
    return this.name;
  }

  constructor() {
    super();
  }
}
