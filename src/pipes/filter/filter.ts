import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
})
export class FilterPipe implements PipeTransform {
  transform(items: any[], predicate: string | RegExp | Object) {

    if (!items) return [];

    if (typeof predicate === 'string') {
      return items.filter(item => item === predicate);
    } else if (predicate instanceof RegExp) {
      let regex: RegExp = predicate;
      return items.filter(item => regex.test(item));
    } else if (typeof predicate === 'object') {
      let keys = Object.keys(predicate);

      return items.filter(item => {
        return keys.every(key => {
          return predicate[key] === '*' || item[key] == predicate[key];
        });
      });
    }

    return items;
  }
}
