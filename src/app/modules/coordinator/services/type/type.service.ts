import { Injectable } from '@angular/core';
import {Admin} from '../../../../global-models/Admin';
import {Coordinator} from '../../../../global-models/Coordinator';
import {Professor} from '../../../../global-models/Professor';
import {Student} from '../../../../global-models/Student';

@Injectable({
  providedIn: 'root'
})
export class TypeService {

  typeMap = {
    0: Admin,
    1: Coordinator,
    2: Professor,
    3: Student
  }


  constructor() { }


  buildObject(type){
    return new this.typeMap[type]();
  }
}
