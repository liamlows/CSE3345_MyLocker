import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItempageComponent } from './itempage.component';
import { FiltersComponent } from './filters/filters.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ItempageComponent, FiltersComponent],
  exports: [ItempageComponent]
})
export class ItempageModule { }
