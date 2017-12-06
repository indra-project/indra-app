import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'byType',
})
export class ByTypePipe implements PipeTransform {
  transform(value: any[], type: string) {
    return type === 'all' ? value : value.filter(x => x.type === type);
  }
}
