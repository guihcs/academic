import {User} from './User';
import {UserType} from './UserType';


export class Student extends User {

  course: Coursessa;

  constructor() {
    super();
    this.type = UserType.STUDENT;
  }
}
