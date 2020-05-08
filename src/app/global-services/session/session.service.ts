import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {assign} from '../../utils/utils';
import {UserFormData} from '../../global-models/user/UserFormData';
import {UserProfile} from '../../global-models/user/UserProfile';
import {Admin} from '../../global-models/user/Admin';
import {CoordinatorFormData} from '../../global-models/user/CoordinatorFormData';
import {ProfessorFormData} from '../../global-models/user/ProfessorFormData';
import {StudentFormData} from '../../global-models/user/Student';
import {TypeService} from '../../modules/coordinator/services/type/type.service';

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  session;

  constructor(
    private http: HttpClient,
    private typeService: TypeService
  ) {
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

    let sessionData = JSON.parse(localStorage.getItem('user'));

    if (!sessionData) {
      return null;
    }

    let user = this.typeService.buildObject(sessionData.type);
    assign(user, sessionData, 2);

    return user;
  }

  logout() {
    localStorage.clear();
  }
}
