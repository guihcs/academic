import {UserDetails} from './UserDetails';

export class StudentDetails extends UserDetails {

  class;

  get courseName(){
    return this.class?.course?.name;
  }

  get className(){
    return this.class?.name;
  }

  get classPeriod(){
    return this.class?.period;
  }
}
