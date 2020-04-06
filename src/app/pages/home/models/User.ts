import {Profile} from './Profile';
import {Address} from './Address';
import {UserType} from './UserType';
import {CustomInput, FormInput, NestedInput} from 'dynamic-forms';
import {AddressInputComponent} from '../components/address-input/address-input.component';

export class User {
  _id?;
  type: UserType;

  @FormInput({
    label: 'Name'
  })
  name: string;

  @FormInput({
    type: 'cpf',
    label: 'CPF'
  })
  cpf: string;

  @FormInput({
    type: 'email',
    label: 'Email'
  })
  email: string;

  @FormInput({
    type: 'password',
    label: 'Password'
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


  static fromJson(json) {
    let user = new User();


    return user;
  }
}


