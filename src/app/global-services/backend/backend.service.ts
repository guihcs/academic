import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

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

  async uploadImage(name, data){
    const formData = new FormData();
    formData.append('file', data);
    const headers = new HttpHeaders({
      'enctype': 'multipart/form-data',
      'Content-Encoding': 'gzip'
    });
    return this.http.post('api/file/' + name, formData, {headers: headers}).toPromise();
  }

  async downloadImage(name){
    return this.http.get('api/file/' + name, {
      responseType: 'text',
    }).toPromise();
  }

  async writeFile(descriptor){
    return this.http.post('api/file/', descriptor).toPromise();
  }

  async writeChunk(chunk){
    return this.http.post('api/chunk/', chunk, {
      headers: {
        'Content-Type': 'application/json',
        'data-type': 'chunk'
      }
    }).toPromise();
  }

  async readChunk(fileID, n){
    return this.http.get(`api/chunk/?id=${fileID}&n=${n}`).toPromise();
  }


}
