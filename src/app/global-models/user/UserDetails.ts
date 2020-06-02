import {UserProfile} from './UserProfile';
import {Profile} from './Profile';
import {Address} from './Address';
import {CustomInput, FormInput, Label, NestedInput} from '@guihss/ngx-dynamic-forms';
import {AddressInputComponent} from '../../modules/admin/components/address-input/address-input.component';
import {CourseDetails} from '../CourseDetails';

export class UserDetails {
  _id?;
  type: UserProfile;

  @Label({
    label: 'Profile'
  })
  set userType(s){}
  get userType() {
    return UserProfile[this.type];
  }

  @FormInput({
    label: 'Name'
  })
  name: string;

  @Label({
    label: 'CPF'
  })
  cpf: string;

  @Label({
    label: 'Email'
  })
  email: string;

  @NestedInput('Profile', 2)
  profile: Profile;

  @CustomInput(AddressInputComponent, {
    label: 'Address'
  })

  address: Address;
  course: CourseDetails

  constructor() {
    this.profile = new Profile();
    this.address = new Address();
  }



  get courseName() {
    return '';
  }
}
