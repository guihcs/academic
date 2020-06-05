import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'data'
})
export class DataPipe implements PipeTransform {


  transform(value: string, ...args: unknown[]): unknown {
    const sulfix = ['b', 'kB', 'MB', 'GB', 'TB'];
    let numericValue = parseInt(value);
    let order = Math.floor(Math.log(numericValue) / Math.log(1024));
    numericValue /= Math.pow(1024, order);
    return [numericValue.toFixed(1), sulfix[order]].join(' ');
  }

}
