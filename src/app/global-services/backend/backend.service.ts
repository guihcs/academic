import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BackendService {

  constructor(private http: HttpClient) {
  }

  async persist(collection, doc) {
    let res: any = await this.http.post('api/persist/' + collection, doc).toPromise();
    return res.status === 'ok';
  }

  async getAll(collection) {
    let res: any = await this.http.get('api/all/' + collection).toPromise();
    return res;
  }

  async delete(collection: string, value: any) {
    let res: any = await this.http.delete('api/delete/' + collection + '/' + value).toPromise();
    return res.status === 'ok';
  }

  async update(collection: string, id, value){
    let res: any = await this.http.post('api/update/' + collection, {
      id,
      value
    }).toPromise();
    return res.status === 'ok';
  }

  async query(collection, id){
    let res: any = await this.http.get('api/' + collection + '/' + id).toPromise();
    return res;
  }
}
