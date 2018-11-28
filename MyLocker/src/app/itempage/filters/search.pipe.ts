import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchByFilter'
})
export class SearchPipe implements PipeTransform {
  transform(items: any[], filterSearch: string): any {
    if (!items) { return []; }
    if (!filterSearch) { return items; }
    filterSearch = filterSearch.toLocaleLowerCase();
    return items.filter( it => {
      return it.name.toString().toLocaleLowerCase().includes(filterSearch);
    });
   }
}
