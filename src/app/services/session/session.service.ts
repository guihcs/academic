import {Injectable} from '@angular/core';
import {User} from '../../models/User';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  session: User;

  constructor(private http: HttpClient) {
  }

  async login(data) {
    const result = this.http.post('/api/login', data);
    const objectPromise: any = await result.toPromise();

    if (objectPromise.status === 'ok') {

      this.session = objectPromise.session;
      return true;
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
