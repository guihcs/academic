import {UserDetails} from './UserDetails';
export class ProfessorDetails extends UserDetails {

  get professorName(){
    return this.name;
  }

  constructor() {
    super();
  }
}
