import {FormInput} from 'dynamic-forms';

export class Profile {
  @FormInput({
    label: 'Phone'
  })
  phone: string;
}
