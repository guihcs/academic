import {FormInput} from '../services/input-builder/form-metadata';

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
