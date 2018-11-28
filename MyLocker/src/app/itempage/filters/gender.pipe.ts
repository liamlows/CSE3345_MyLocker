import { Product } from '../../models';
import { Pipe, PipeTransform } from '@angular/core';
import { filter } from 'rxjs/operators';


@Pipe({
  name: 'filterByGender'
})
export class GenderPipe implements PipeTransform {
 transform(items: Product[], filterByGender: string): Product[] {
      if (!items) { return []; }
      if (!filterByGender) { return items; }
  return items.filter( it => {
        console.log(it.id.toString());
        return it.gender.toString().includes(filterByGender);
      });
     }
}
