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

  // @ts-ignore
  @FormInput({
    type: 'cpf',
    label: 'CPF',
    required: true
  })
  cpf: string;

  // @ts-ignore
  @FormInput({
    type: 'email',
    label: 'Email',
    required: true
  })
  email: string;

  // @ts-ignore
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


  static fromJson(json) {
    let user = new User();


    return user;
  }
}


