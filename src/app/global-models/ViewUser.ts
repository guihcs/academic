import {UserType} from './UserType';
import {Profile} from './Profile';
import {Address} from './Address';
import {CustomInput, FormInput, Label, NestedInput} from '../libs/dynamic-forms/models/form-metadata';
import {AddressInputComponent} from '../modules/admin/components/address-input/address-input.component';

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


  get userType() {
    return UserType[this.type];
  }
}
