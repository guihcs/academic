import {Injectable} from '@angular/core';
import {User} from '../../models/User';
import {UserService} from '../user/user.service';

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  session: User;

  constructor(private userService: UserService) {
  }

  login(data) {
    for (const user of this.userService.getUsers()) {
      if (user.login === data.login && user.password === data.password) {
        this.session = user;
        return true;
      }
    }
    return false;
  }


  getSession() {
    return this.session;
  }

  logout() {
    this.session = null;
  }
}
