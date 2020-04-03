import {ComponentFactoryResolver, Injectable, ViewContainerRef} from '@angular/core';
import {InputDescriptor} from '../models/input-descriptor';
import {ConfigurableInput} from '../models/configurable-input';
import {TextInputComponent} from '../inputs/text/text-input.component';
import {LabelComponent} from '../inputs/label/label.component';

@Injectable({
  providedIn: 'root'
})
export class InputBuilderService {

  constructor(private componentFactoryResolver: ComponentFactoryResolver) {
  }


  buildInput(viewRef: ViewContainerRef, descriptor: InputDescriptor): ConfigurableInput {

    switch (descriptor.type) {
      case 'password':
      case 'email':
      case 'text': {
        return this.buildTextInput(viewRef, descriptor.type, descriptor);
      }
      case 'label': {
        return this.buildLabel(viewRef, descriptor);
      }
      default: {
        return this.buildTextInput(viewRef, 'text', descriptor);
      }
    }
  }

  private buildComponent(viewRef, type) {
    return viewRef.createComponent(
      this.componentFactoryResolver.resolveComponentFactory(type)
    ).instance;
  }

  private buildTextInput(viewRef, type, args) {
    const instance: ConfigurableInput = this.buildComponent(viewRef, TextInputComponent);
    args.type = type;
    instance.applyArguments(args);
    return instance;
  }

  private buildLabel(viewRef, descriptor) {
    const instance: ConfigurableInput = this.buildComponent(viewRef, LabelComponent);
    instance.applyArguments(descriptor);
    return instance;
  }
}
