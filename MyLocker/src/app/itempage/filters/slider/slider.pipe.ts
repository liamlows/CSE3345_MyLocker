import { Product } from './../../../models';
import { Pipe, PipeTransform } from '@angular/core';
import { filter } from 'rxjs/operators';


@Pipe({
  name: 'slider'
})
export class SliderPipe implements PipeTransform {
 transform(items: Product[], slider: string): Product[] {
      if (!items) { return []; }
      if (!slider) { return items; }
  // filterByColor = filterByColor.toLocaleLowerCase();
  // console.log("HELP");
  return items.filter( it => {
        console.log(it.id.toString());
        return it.price.toString().toLocaleLowerCase().includes(slider);
      });
     }
}
