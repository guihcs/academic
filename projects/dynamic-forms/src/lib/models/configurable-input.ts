import {InputDescriptor} from './input-descriptor';

export interface ConfigurableInput {
  applyArguments(args: InputDescriptor);

  getFormControl();

}
