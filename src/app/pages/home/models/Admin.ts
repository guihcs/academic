import {User} from './User';
import {UserType} from './UserType';


export class Admin extends User {

  titulation: string;

  constructor() {
    super();
    this.type = UserType.ADMIN;
  }
}
