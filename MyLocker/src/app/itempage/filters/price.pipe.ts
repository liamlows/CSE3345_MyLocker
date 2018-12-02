import { Product } from './../../models';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterByPrice'
})
export class PricePipe implements PipeTransform {

  transform(items: Product[], price: number): Product[] {
    if (!items) { return []; }
    if (!price) { return items; }
    let a = +price;
    let b = +price+50;
    return items.filter( it => {
      let p = it.price;
      if(a == 350){
        if(p >= a){
          return it;
        }
      }
      else if ((p >= a) && (p <= b)){
        return it;
      }
    });
  }
}
