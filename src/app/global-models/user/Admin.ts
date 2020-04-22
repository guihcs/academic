import {UserFormData} from './UserFormData';
import {UserProfile} from './UserProfile';


export class Admin extends UserFormData {

  titulation: string;

  constructor() {
    super();
    this.type = UserProfile.ADMIN;
  }
}
