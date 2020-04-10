import 'reflect-metadata';
import {InputDescriptor} from './input-descriptor';
import {Type} from '@angular/core';

export function Label(descriptor: InputDescriptor): any {
  return (target, key) => {
    Reflect.defineMetadata(key, {
      type: 'label',
      descriptor
    }, target);
  };
}

export function FormInput(descriptor: InputDescriptor): any {
  return (target, key) => {
    Reflect.defineMetadata(key, {
      type: 'form-input',
      descriptor
    }, target);
  };
}

export function NestedInput(title, depth?): any {
  return (target, key) => {
    Reflect.defineMetadata(key, {
      type: 'nested-input',
      title: title,
      depth: depth
    }, target);
  };
}

export function CustomInput<T>(component: Type<T>, descriptor: InputDescriptor): any {
  return (target, key) => {

    Reflect.defineMetadata(key, {
      type: 'custom-input',
      descriptor,
      component
    }, target);
  };
}




export function getDescriptor(target, key): any {
  let metadata: InputDescriptor = Reflect.getMetadata(key, target);
  if (!metadata) {
    return null;
  }
  if (target[key]) {
    metadata.defaultValue = target[key];
  } else {
    metadata.defaultValue = undefined;
  }
  return metadata;
}


