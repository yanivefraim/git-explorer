import {
  Date,
  isBlank
} from 'angular2/src/facade/lang';
import {PipeTransform, WrappedValue, Pipe, Injectable} from 'angular2/core';

@Pipe({name: 'dateParse', pure: true})
export class DateParsePipe implements PipeTransform {
  transform(value: string, args: any[]): Date {
    if (isBlank(value)) return null;
    return new Date(value);
  }
}
