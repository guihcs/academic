import {User} from './User';
import {UserType} from './UserType';
import {Class} from './Class';
import {CustomInput, FormInput} from '../libs/dynamic-forms/models/form-metadata';
import {ClassSelectorComponent} from '../modules/coordinator/components/class-selector/class-selector.component';


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
