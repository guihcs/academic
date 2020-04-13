import {User} from './User';
import {UserType} from './UserType';
import {Course} from './Course';


export class Student extends User {

  course: Course;

  constructor() {
    super();
    this.type = UserType.STUDENT;
  }
}
