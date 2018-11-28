import { Product } from '../../models';
import { Pipe, PipeTransform } from '@angular/core';
import { filter } from 'rxjs/operators';


@Pipe({
  name: 'filterByItem'
})
export class ItemPipe implements PipeTransform {
 transform(items: Product[], filterByItem: string): Product[] {
      if (!items) { return []; }
      if (!filterByItem) { return items; }
  filterByItem = filterByItem.toLocaleLowerCase();
  return items.filter( it => {
        console.log(it.id.toString());
        return it.style.toString().toLocaleLowerCase().includes(filterByItem);
      });
     }
}
