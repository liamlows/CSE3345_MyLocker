import { Product } from '../../models';
import { Pipe, PipeTransform } from '@angular/core';
import { filter } from 'rxjs/operators';


@Pipe({
  name: 'filterByColor'
})
export class ColorPipe implements PipeTransform {
  transform(items: Product[], filterByColor: string): Product[] {
    if (!items) { return []; }
    if (!filterByColor) { return items; }
    return items.filter( it => {
      return it.color.toString().toLocaleLowerCase().includes(filterByColor);
    });
  }
}
