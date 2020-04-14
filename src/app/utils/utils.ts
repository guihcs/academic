export function toPascalCase(text: string) {
  return text[0].toUpperCase() + text.substr(1).toLowerCase();
}


export function assign(target, src, depth) {

  if (depth <= 0) {
    return;
  }
  for (const key of Object.keys(src)) {
    if (src[key] && typeof src[key] === 'object') {
      if (target[key]) {
        assign(target[key], src[key], depth - 1);
      }else {
        target[key] = src[key];
      }

    } else if(src[key]){
      target[key] = src[key];
    }
  }
}
