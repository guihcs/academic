import {User} from './User';
import {UserType} from './UserType';


export class Student extends User {
  constructor() {
    super();
    this.type = UserType.STUDENT;
  }
}
