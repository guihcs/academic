import {User} from './User';
import {UserType} from './UserType';


export class Professor extends User {

  constructor() {
    super();
    this.type = UserType.PROFESSOR;
  }
}
