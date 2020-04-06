import {User} from './User';
import {UserType} from './UserType';

export class Coordinator extends User {

  constructor() {
    super();
    this.type = UserType.COORDINATOR;
  }


}

