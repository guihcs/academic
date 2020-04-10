import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ViewUser} from '../../global-models/ViewUser';
import {User} from '../../global-models/User';
import {assign} from '../../utils/utils';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) {
  }

  async saveUser(user: User): Promise<boolean> {
    let insertResult: any = await this.http.post('api/insertUser', {user: user}).toPromise();
    return insertResult.status === 'ok';
  }

  async deleteUser(user: ViewUser): Promise<boolean> {
    let deleteResult: any = await this.http.post('api/deleteUser', {
      key: 'cpf',
      value: user.cpf
    }).toPromise();
    return deleteResult.status === 'ok';
  }

  async getUsers(userData: any): Promise<ViewUser[]> {
    let userJson = await this.http.get<ViewUser[]>('api/getUsers/' + userData).toPromise();
    let users = [];
    for (const user of userJson) {
      let targetUser = new ViewUser();
      assign(targetUser, user, 2);
      users.push(targetUser);
    }
    return users;
  }

  async updateUser(user) {
    let result: any = await this.http.post('api/updateUser', {user: user}).toPromise();
    return result.status === 'ok';
  }

  async queryUser(id) {
    let userJson = await this.http.get<ViewUser>('api/getUser/' + id).toPromise();
    let targetUser = new ViewUser();
    assign(targetUser, userJson, 2);
    return targetUser;
  }

}
