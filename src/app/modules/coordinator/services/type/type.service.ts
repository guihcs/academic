import { Injectable } from '@angular/core';
import {Admin} from '../../../../global-models/user/Admin';
import {CoordinatorFormData} from '../../../../global-models/user/CoordinatorFormData';
import {ProfessorFormData} from '../../../../global-models/user/ProfessorFormData';
import {StudentFormData} from '../../../../global-models/user/Student';

@Injectable({
  providedIn: 'root'
})
export class TypeService {

  typeMap = {
    0: Admin,
    1: CoordinatorFormData,
    2: ProfessorFormData,
    3: StudentFormData
  }


  constructor() { }


  buildObject(type){
    return new this.typeMap[type]();
  }
}
