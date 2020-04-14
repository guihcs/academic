import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {assign} from '../../utils/utils';
import {User} from '../../global-models/User';
import {UserType} from '../../global-models/UserType';
import {Admin} from '../../global-models/Admin';
import {Coordinator} from '../../global-models/Coordinator';
import {Professor} from '../../global-models/Professor';
import {Student} from '../../global-models/Student';

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  session;

  constructor(private http: HttpClient) {
  }

  async login(data) {
    const result = this.http.post('/api/login', data);
    const objectPromise: any = await result.toPromise();
    if (objectPromise.status === 'ok') {
      localStorage.setItem('user', JSON.stringify(objectPromise.session));
      return true;
    }
    return false;
  }


  buildUserObject(type){
    switch (type) {
      case UserType.ADMIN: return new Admin();
      case UserType.COORDINATOR: return new Coordinator();
      case UserType.PROFESSOR: return new Professor();
      case UserType.STUDENT: return new Student();
    }
  }


  getSession() {

    let sessionData = JSON.parse(localStorage.getItem('user'));

    if (!sessionData) {
      return null;
    }

    let user = this.buildUserObject(sessionData.type);
    assign(user, sessionData, 2);
    return sessionData;
  }

  logout() {
    localStorage.clear();
  }
}
