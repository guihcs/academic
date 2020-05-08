import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AddressService {

  constructor(private http: HttpClient) {
  }


  async getAddress(cep) {

    return this.http.get(`https://viacep.com.br/ws/${cep}/json/`).toPromise();
  }
}
