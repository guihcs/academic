import {ComponentFactoryResolver, Injectable, ViewContainerRef} from '@angular/core';
import {TextInputComponent} from './inputs/text-input/text-input.component';
import {DynamicInput} from './DynamicInput';
import {InputDescriptor} from './InputDescriptor';
import {LabelComponent} from './inputs/label/label.component';

@Injectable({
  providedIn: 'root'
})
export class InputBuilderService {

  constructor(private componentFactoryResolver: ComponentFactoryResolver) {
  }


  buildInput(viewRef: ViewContainerRef, descriptor: InputDescriptor): DynamicInput {

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
    const instance: DynamicInput = this.buildComponent(viewRef, TextInputComponent);
    args.type = type;
    instance.applyArguments(args);
    return instance;
  }

  private buildLabel(viewRef, descriptor) {
    const instance: DynamicInput = this.buildComponent(viewRef, LabelComponent);
    instance.applyArguments(descriptor);
    return instance;
  }
}
