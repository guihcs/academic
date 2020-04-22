import {UserFormData} from './UserFormData';
import {UserProfile} from './UserProfile';


export class ProfessorFormData extends UserFormData {

  constructor() {
    super();
    this.type = UserProfile.PROFESSOR;
  }
}
