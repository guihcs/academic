import 'reflect-metadata';
import {InputDescriptor} from './InputDescriptor';

export function FormInput(descriptor: InputDescriptor): any {
  return (target, key) => {
    Reflect.defineMetadata(key, descriptor, target);
  };
}

export function NestedInput(title, depth?): any {
  return (target, key) => {
    Reflect.defineMetadata(key, {
      title: title,
      depth: depth
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


