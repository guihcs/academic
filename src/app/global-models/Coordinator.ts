import {User} from './User';
import {UserType} from './UserType';
import {Course} from './Course';

export class Coordinator extends User {

  course: Course;

  constructor() {
    super();
    this.type = UserType.COORDINATOR;
    this.course = new Course();
  }


}

