import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ClassService {

  constructor(private http: HttpClient) {
  }

  async addClass(val) {
    console.log(val);

    let response: any = await this.http.post('api/createClass', val).toPromise();

    return response.status === 'ok';
  }

  async getClasses() {
    return this.http.get('api/classes').toPromise();
  }
}
