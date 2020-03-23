import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

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
    return JSON.parse(localStorage.getItem('user'));
  }

  logout() {
    localStorage.clear();
  }
}
