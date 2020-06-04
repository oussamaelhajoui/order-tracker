import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';

@Pipe({
  name: 'momentDate'
})
export class MomentDatePipe implements PipeTransform {
  transform(value: unknown, ...args: unknown[]): unknown {
    moment().locale('nl');
    return moment(value).fromNow();
  }

}
