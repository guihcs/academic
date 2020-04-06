import {UserType} from './UserType';
import {CustomInput, FormInput, NestedInput} from 'dynamic-forms';
import {Profile} from './Profile';
import {AddressInputComponent} from '../components/address-input/address-input.component';
import {Address} from './Address';
import {Label} from '../../../../../projects/dynamic-forms/src/lib/models/form-metadata';

export class ViewUser {
  _id?;
  type: UserType;

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

  constructor() {
    this.profile = new Profile();
    this.address = new Address();
  }
}
