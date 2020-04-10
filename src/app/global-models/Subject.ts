import {CustomInput, FormInput} from 'dynamic-forms';
import {UserSelectorComponent} from '../components/user-selector/user-selector.component';
import {UserType} from './UserType';

export class Subject {
  @FormInput({
    label: 'Name'
  })
  name: string;


  @CustomInput(UserSelectorComponent, {
    label: 'Professor',
    args: {
      type: UserType.PROFESSOR
    }
  })
  professor;
}
