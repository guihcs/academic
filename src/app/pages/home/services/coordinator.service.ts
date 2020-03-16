import {Injectable} from '@angular/core';
import {UserService} from '../../../services/user/user.service';
import {User} from '../../../models/User';
import {UserType} from '../../../models/UserType';

@Injectable({
  providedIn: 'root'
})
export class CoordinatorService extends UserService {


  constructor(private userService: UserService) {
    super();
  }

  getUsers(): User[] {
    let professors = [];
    for (const user of this.userService.getUsers()) {
      if (user.type === UserType.COORDINATOR) {
        professors.push(user);
      }
    }
    return professors;
  }


  deleteUser(user: User) {
    this.userService.deleteUser(user);
  }
}
