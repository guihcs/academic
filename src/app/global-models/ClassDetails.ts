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

  @CustomInput(ClassDisciplineViewComponent, {
    label: 'Disciplines'
  })
  get classPeriod(){
    return this.period;
  }

  @CustomInput(ClassStudentsComponent, {
    label: 'Students'
  })
  get id(){
    return this._id;
  };

}
