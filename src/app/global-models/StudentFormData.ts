import {CustomInput} from '../libs/dynamic-forms/models/form-metadata';
import {ClassSelectorComponent} from '../modules/coordinator/components/class-selector/class-selector.component';
import {UserType} from './UserType';
import {Class} from './Class';
import {User} from './User';


export class StudentFormData extends User{
  @CustomInput(ClassSelectorComponent, {
    label: 'Class'
  })
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
