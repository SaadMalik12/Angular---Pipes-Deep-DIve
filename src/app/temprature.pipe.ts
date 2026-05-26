import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'temprature',
  standalone: true
})
export class TempraturePipe implements PipeTransform {

  transform(value: string | number | null, inputType: 'cel' | 'fah', outputType: 'cel' | 'fah'): unknown {
    if (!value){
      return value;
    }

    let vel: number;
    if (typeof value === 'string') {
      vel = parseFloat(value);
    } else {
      vel = value;
    }

    let outputTemp: number;

    if (inputType === 'cel' && outputType === 'fah') {
      outputTemp = vel * 9 / 5 + 32;
    } else if (inputType === 'fah' && outputType === 'cel') {
      outputTemp = (vel - 32) * (5 / 9);
    } else {
      outputTemp = vel;
    }

    let symbol: '°C' | '°F';

    if(!outputType) {
      symbol = inputType === 'cel' ? '°C' : '°F'; 
    } else {
      symbol = outputType === 'cel' ? '°C' : '°F';
    }

    return `${outputTemp.toFixed(2)} ${symbol}`;
  }

}
