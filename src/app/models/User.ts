import {Profile} from './Profile';
import {Address} from './Address';
import {UserType} from './UserType';
import {FormInput, NestedInput} from '../services/input-builder/form-metadata';

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
  @NestedInput('Address', 2)
  address: Address;


  constructor() {
    this.profile = new Profile();
    this.address = new Address();
  }
}


