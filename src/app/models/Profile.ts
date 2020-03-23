import {FormInput} from '../services/input-builder/form-metadata';

export class Profile {
  @FormInput({
    label: 'Phone'
  })
  phone: string;
}
