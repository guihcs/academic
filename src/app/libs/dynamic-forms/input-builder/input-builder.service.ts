import {ComponentFactoryResolver, Injectable, ViewContainerRef} from '@angular/core';
import {InputDescriptor} from '../models/input-descriptor';
import {ConfigurableInput} from '../models/configurable-input';
import {TextInputComponent} from '../inputs/text/text-input.component';
import {LabelComponent} from '../inputs/label/label.component';
import {SelectComponent} from '../inputs/select/select.component';
import {CheckboxComponent} from '../inputs/checkbox/checkbox.component';

@Injectable({
  providedIn: 'root'
})
export class InputBuilderService {

  constructor(
    private componentFactoryResolver: ComponentFactoryResolver
  ) {
  }


  buildInput(viewRef: ViewContainerRef, descriptor): ConfigurableInput {

    switch (descriptor.descriptor.type) {
      case 'password':
      case 'email':
      case 'text': {
        return this.buildTextInput(viewRef, descriptor);
      }
      case 'select': {
        return this.buildSelect(viewRef, descriptor);
      }
      case 'checkbox': {
        return this.buildCustomInput(viewRef, descriptor, CheckboxComponent);
      }
      default: {
        return this.buildTextInput(viewRef, descriptor);
      }
    }
  }


  buildCustomInput(viewRef: ViewContainerRef, descriptor: InputDescriptor, type): ConfigurableInput {
    let instance: ConfigurableInput = this.buildComponent(viewRef, type);
    instance.applyArguments(descriptor);
    return instance;
  }

  buildLabel(viewRef, descriptor) {
    const instance: ConfigurableInput = this.buildComponent(viewRef, LabelComponent);
    instance.applyArguments(descriptor);
    return instance;
  }

  private buildComponent(viewRef, type) {
    return viewRef.createComponent(
      this.componentFactoryResolver.resolveComponentFactory(type)
    ).instance;
  }

  private buildTextInput(viewRef, args) {
    const instance: ConfigurableInput = this.buildComponent(viewRef, TextInputComponent);
    instance.applyArguments(args);
    return instance;
  }

  private buildSelect(viewRef, args) {
    const instance: ConfigurableInput = this.buildComponent(viewRef, SelectComponent);
    instance.applyArguments(args);
    return instance;
  }


}
