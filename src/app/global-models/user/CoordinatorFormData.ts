import {UserFormData} from './UserFormData';
import {UserProfile} from './UserProfile';
import {CourseFormData} from '../CourseFormData';
import {CustomInput} from '@guihss/ngx-dynamic-forms';
import {CourseSelectComponent} from '../../modules/admin/components/course-select/course-select.component';

export class CoordinatorFormData extends UserFormData {

  @CustomInput(CourseSelectComponent, {
    label: 'Select Course'
  })
  course: CourseFormData;

  constructor() {
    super();
    this.type = UserProfile.COORDINATOR;
    this.course = new CourseFormData();
  }

}

