import { Product } from '../../models';
import { Pipe, PipeTransform } from '@angular/core';
import { filter } from 'rxjs/operators';


@Pipe({
  name: 'filterByBrand'
})
export class BrandPipe implements PipeTransform {
 transform(items: Product[], filterByBrand: string): Product[] {
      if (!items) { return []; }
      if (!filterByBrand) { return items; }
   filterByBrand = filterByBrand.toLocaleLowerCase();
  return items.filter( it => {
        console.log(it.id.toString());
        return it.brand_name.toString().toLocaleLowerCase().includes(filterByBrand);
      });
     }
}
