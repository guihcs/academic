import {ViewUser} from '../../../global-models/ViewUser';
import {UserType} from '../../../global-models/UserType';
import {CustomInput, FormInput, Label, NestedInput} from '../../../libs/dynamic-forms/models/form-metadata';
import {Profile} from '../../../global-models/Profile';
import {AddressInputComponent} from '../components/address-input/address-input.component';
import {Address} from '../../../global-models/Address';
import {CourseSelectComponent} from '../components/course-select/course-select.component';
import {Course} from '../../../global-models/Course';


export class CoordinatorView {

  _id?;
  type: UserType;

  @FormInput({
    label: 'Name'
  })
  name: string;

  @Label({
    label: 'CPF'
  })
  cpf: string;

  @Label({
    label: 'Email'
  })
  email: string;

  @NestedInput('Profile', 2)
  profile: Profile;

  @CustomInput(AddressInputComponent, {
    label: 'Address'
  })
  address: Address;

  @CustomInput(CourseSelectComponent, {
    label: 'Select Course'
  })
  course: Course;

  constructor() {
    this.profile = new Profile();
    this.address = new Address();
    this.course = new Course();
  }
}
