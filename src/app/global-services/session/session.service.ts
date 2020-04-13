import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {assign} from '../../utils/utils';
import {User} from '../../global-models/User';

@Injectable({
  providedIn: 'root'
})
export class SessionService {

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


  getSession() {
    let user = new User();
    let sessionData = JSON.parse(localStorage.getItem('user'));

    if (!sessionData) {
      return null;
    }

    assign(user, sessionData, 2);
    return sessionData;
  }

  logout() {
    localStorage.clear();
  }
}
