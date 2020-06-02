import {FormInput} from '@guihss/ngx-dynamic-forms';


export class Profile {
  @FormInput({
    label: 'Phone'
  })
  phone: string;
}
