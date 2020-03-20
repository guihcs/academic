import {Profile} from './Profile';
import {Address} from './Address';
import {UserType} from './UserType';


export class UserFormDescriptor {
  name = {};
  cpf = {
    type: 'cpf'
  };
  email = {
    type: 'email'
  };
  password = {
    type: 'password'
  };

  phone = {
    type: 'phone'
  };
  city = {};
  street = {};
  state = {};
}

export class User {
  type: UserType;
  name: string;
  cpf: string;
  email: string;
  password: string;
  profile: Profile;
  address: Address;


  constructor() {
    this.profile = new Profile();
    this.address = new Address();
  }
}


