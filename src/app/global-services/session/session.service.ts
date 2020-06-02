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
import {Router} from '@angular/router';
import {BackendService} from '../backend/backend.service';

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  session;

  constructor(
    private http: HttpClient,
    private backendService: BackendService,
    private router: Router,
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

  async nlogin(data){

    const res:any = await this.http.post('/api/nlogin', data).toPromise();

    if (res.status === 'ok'){

      localStorage.setItem('profile', JSON.stringify(res.profile));
      localStorage.setItem('token', res.token);

      return await this.redirect();
    }

    return false;

  }

  async activate(id, password) {
    let res:any = await this.backendService.activate(id, password);

    if (res.status === 'ok'){
      localStorage.setItem('profile', JSON.stringify(res.profile));
      localStorage.setItem('token', res.token);

      return await this.redirect();
    }
  }


  async redirect(){

    let session = this.getSession();

    switch (session.type) {
      case UserProfile.ADMIN: {
        return await this.router.navigate(['/admin']);

      }
      case UserProfile.COORDINATOR: {
        return await this.router.navigate(['/coordinator']);

      }
      case UserProfile.PROFESSOR: {
        return await this.router.navigate(['/professor']);

      }
      case UserProfile.STUDENT: {
        return await this.router.navigate(['/student']);
      }
    }
  }


  getSession() {

    let data = localStorage.getItem('profile');
    let sessionData = JSON.parse(data);

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
