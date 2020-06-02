import {Label} from '@guihss/ngx-dynamic-forms';


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
