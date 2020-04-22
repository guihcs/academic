import {UserDetails} from './UserDetails';
import {CustomInput} from '../../libs/dynamic-forms/models/form-metadata';
import {Profile} from './Profile';
import {Address} from './Address';
import {CourseSelectComponent} from '../../modules/admin/components/course-select/course-select.component';



export class CoordinatorDetails extends UserDetails {

  @CustomInput(CourseSelectComponent, {
    label: 'Select Course'
  })
  course;

  constructor() {
    super();
    this.profile = new Profile();
    this.address = new Address();
  }

  get courseName(){
    return this.course?.name;
  }
}
