import {Profile} from './Profile';
import {Address} from './Address';
import {UserProfile} from './UserProfile';
import {CustomInput, FormInput, NestedInput} from '../../libs/dynamic-forms/models/form-metadata';
import {AddressInputComponent} from '../../modules/admin/components/address-input/address-input.component';

export class UserFormData {
  _id?;
  type: UserProfile;

  @FormInput({
    label: 'Name'
  })
  name: string;

  @FormInput({
    type: 'cpf',
    label: 'CPF',
    required: true
  })
  cpf: string;

  @FormInput({
    type: 'email',
    label: 'Email',
    required: true
  })
  email: string;

  @FormInput({
    type: 'password',
    label: 'Password',
    required: true
  })
  password: string;

  @NestedInput('Profile', 2)
  profile: Profile;

  @CustomInput(AddressInputComponent, {
    label: 'Address'
  })
  address: Address;


  constructor() {
    this.profile = new Profile();
    this.address = new Address();
  }

  get profileName(){
    return UserProfile[this.type];
  }
}


