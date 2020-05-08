import {CustomInput} from '../../libs/dynamic-forms/models/form-metadata';
import {ClassSelectorComponent} from '../../modules/coordinator/components/class-selector/class-selector.component';
import {UserProfile} from './UserProfile';
import {UserFormData} from './UserFormData';
import {ClassDetails} from '../ClassDetails';


export class StudentFormData extends UserFormData{
  @CustomInput(ClassSelectorComponent, {
    label: 'Class'
  })
  class;

  constructor() {
    super();
    this.type = UserProfile.STUDENT;
    this.class = new ClassDetails();
  }

  get className(){
    return this.class.name;
  }

  get classPeriod(){
    return this.class.period;
  }
}
