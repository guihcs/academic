import {UserDetails} from './UserDetails';
import {CustomInput, FormInput, Label} from '../../libs/dynamic-forms/models/form-metadata';
import {ImageViewerComponent} from '../../templates/image-viewer/image-viewer.component';

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
