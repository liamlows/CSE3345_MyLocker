import { Product } from './../../models';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterByPrice'
})
export class PricePipe implements PipeTransform {

  transform(items: Product[], price: number): Product[] {
    if (!items) { return []; }
    if (!price) { return items; }
    let a = +price+50;
    return items.filter( it => {
      if ((price <= it.price)) {
        if((a >= it.price)){
          return it;
        }

      }
    });
  }
}
