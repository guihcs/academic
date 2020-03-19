import {ComponentFactoryResolver, ComponentRef, Injectable, ViewContainerRef} from '@angular/core';
import {TextInputComponent} from './inputs/text-input/text-input.component';
import {DynamicInput} from './DynamicInput';

@Injectable({
  providedIn: 'root'
})
export class InputBuilderService {

  constructor(private componentFactoryResolver: ComponentFactoryResolver) {
  }


  buildInput(viewRef: ViewContainerRef, type, args): DynamicInput {

    switch (type) {
      case 'password':
      case 'email':
      case 'text': {
        return this.buildTextInput(viewRef, type, args);
      }
      default: {
        return this.buildTextInput(viewRef, 'text', args);
      }
    }
  }


  private buildTextInput(viewRef, type, args) {
    const ref: ComponentRef<TextInputComponent> = viewRef.createComponent(
      this.componentFactoryResolver.resolveComponentFactory(TextInputComponent)
    );

    const instance: DynamicInput = ref.instance;
    args.type = type;
    instance.applyArguments(args);
    return instance;
  }
}
