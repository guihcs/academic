import {Profile} from './Profile';
import {Address} from './Address';
import {UserType} from './UserType';


export class UserFormDescriptor {
  name = {};
  cpf = {
    type: 'cpf'
  };
  login = {
    type: 'email'
  };
  password = {
    type: 'password'
  };
  email = {
    type: 'email'
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
  login: string;
  password: string;
  profile: Profile;
  address: Address;


  constructor() {
    this.profile = new Profile();
    this.address = new Address();
  }
}


