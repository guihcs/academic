import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SubjectService {

  constructor(private http: HttpClient) {
  }


  async addSubject(subject) {
    let response: any = await this.http.post('api/createSubject', subject).toPromise();

    return response.status === 'ok';
  }

  async getSubjects() {
    return this.http.get('api/subjects').toPromise();
  }
}
