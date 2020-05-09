import {CustomInput, FormInput, Label} from '../libs/dynamic-forms/models/form-metadata';
import {ClassDisciplineViewComponent} from '../templates/class-discipline-view/class-discipline-view.component';
import {ClassStudentsComponent} from '../modules/coordinator/components/class-students/class-students.component';
import {forwardRef} from '@angular/core';



export class ClassDetails {

  _id;
  @Label({
    label: 'Name'
  })
  name;

  @Label({
    label: 'Period'
  })
  period;


  get classPeriod(){
    return this.period;
  }

  get id(){
    return this._id;
  };

}
