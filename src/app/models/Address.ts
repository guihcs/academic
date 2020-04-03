import {FormInput} from 'dynamic-forms';

export class Address {
  @FormInput({
    label: 'City'
  })
  city: string;
  @FormInput({
    label: 'Street'
  })
  street: string;
  @FormInput({
    label: 'State'
  })
  state: string;
}
