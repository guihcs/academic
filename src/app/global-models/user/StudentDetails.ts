import {UserDetails} from './UserDetails';
import {ImageViewerComponent} from '../../templates/image-viewer/image-viewer.component';
import {CustomInput, FormInput, Label} from '@guihss/ngx-dynamic-forms';

export class StudentDetails extends UserDetails {

  @CustomInput(ImageViewerComponent, {
    label: 'Image'
  })
  image;

  class;

  @Label({
    label: 'Code'
  })
  code;
  disciplines: any[];

  @Label({
    label: 'Class'
  })
  get className(){
    return this.class?.name;
  }

  @FormInput({
    type: 'checkbox',
    label: 'Active'
  })
  active;


  get courseName(){
    return this.class?.course?.name;
  }



  get classPeriod(){
    return this.class?.period;
  }
}
