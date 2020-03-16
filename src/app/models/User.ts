import {Profile} from './Profile';
import {Address} from './Address';
import {UserType} from './UserType';

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
