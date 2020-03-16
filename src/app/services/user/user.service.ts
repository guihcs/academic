import {Injectable} from '@angular/core';
import {User} from '../../models/User';
import {Admin} from '../../models/Admin';
import {Coordinator} from '../../models/Coordinator';
import {Professor} from '../../models/Professor';
import {Student} from '../../models/Student';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  users: User[] = [];

  constructor() {
    let admin = new Admin();
    admin.name = 'Cleito rasta';
    admin.login = 'qwe';
    admin.password = 'asd';
    admin.cpf = '123';
    let coordinator = new Coordinator();
    coordinator.name = 'Alm';
    coordinator.login = 'asd';
    coordinator.password = 'zxc';
    coordinator.cpf = '234';
    let professor = new Professor();
    professor.name = 'Luan';
    professor.login = 'wer';
    professor.password = 'sdf';
    professor.cpf = '654';
    let student = new Student();
    student.name = 'Tiam';
    student.login = 'sdf';
    student.password = 'xcv';
    student.cpf = '543';

    this.users.push(admin, professor, coordinator, student);
  }

  saveUser(user: User) {


    this.users.push(user);
  }

  deleteUser(user: User) {


    for (let i = 0; i < this.users.length; i++) {


      if (user.cpf === this.users[i].cpf) {
        this.users.splice(i, 1);


        break;
      }
    }
  }


  getUsers() {
    return this.users;
  }
}
