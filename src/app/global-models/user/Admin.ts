import {UserProfile} from './UserProfile';
import {UserDetails} from './UserDetails';


export class Admin extends UserDetails {

  titulation: string;

  constructor() {
    super();
    this.type = UserProfile.ADMIN;
  }
}
