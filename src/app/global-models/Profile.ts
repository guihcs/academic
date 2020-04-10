import {FormInput} from '../libs/dynamic-forms/models/form-metadata';


export class Profile {
  @FormInput({
    label: 'Phone'
  })
  phone: string;
}
