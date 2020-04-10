
import {UserType} from './UserType';
import {CustomInput, FormInput} from '../libs/dynamic-forms/models/form-metadata';
import {UserSelectorComponent} from '../modules/admin/components/user-selector/user-selector.component';


export class Course {

  @FormInput({
    label: 'Name'
  })
  name: string;
  @FormInput({
    label: 'Area',
    type: 'select',
    args: ['Human', 'Exact']
  })
  area: string;

  @CustomInput(UserSelectorComponent, {
    label: 'Coordinator',
    args: {
      type: UserType.COORDINATOR
    }
  })
  coordinator;
  _id: any;
}
