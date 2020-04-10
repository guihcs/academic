import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  constructor(private http: HttpClient) {
  }


  async addCourse(course) {
    let response: any = await this.http.post('api/createCourse', course).toPromise();

    return response.status === 'ok';
  }


  async getCourses() {
    return this.http.get('api/courses').toPromise();
  }
}
