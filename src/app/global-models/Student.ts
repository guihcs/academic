import {User} from './User';
import {UserType} from './UserType';
import {Course} from './Course';
import {Class} from './Class';
import {FormInput} from '../libs/dynamic-forms/models/form-metadata';


export class Student extends User {

  class;

  constructor() {
    super();
    this.type = UserType.STUDENT;
    this.class = new Class();
  }

  get className(){
    return this.class.name;
  }

  get classPeriod(){
    return this.class.period;
  }
}
