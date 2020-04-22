import {UserFormData} from './UserFormData';
import {UserProfile} from './UserProfile';
import {Class} from '../Class';
import {CustomInput, FormInput} from '../../libs/dynamic-forms/models/form-metadata';
import {ClassSelectorComponent} from '../../modules/coordinator/components/class-selector/class-selector.component';


export class StudentFormData extends UserFormData {

  class;

  constructor() {
    super();
    this.type = UserProfile.STUDENT;
    this.class = new Class();
  }

  get className(){
    return this.class.name;
  }

  get classPeriod(){
    return this.class.period;
  }
}
