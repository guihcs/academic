import {UserFormData} from './UserFormData';
import {UserProfile} from './UserProfile';
import {ClassFormData} from '../ClassFormData';


export class StudentFormData extends UserFormData {

  class;

  constructor() {
    super();
    this.type = UserProfile.STUDENT;
    this.class = new ClassFormData();
  }

  get className(){
    return this.class.name;
  }

  get classPeriod(){
    return this.class.period;
  }
}
