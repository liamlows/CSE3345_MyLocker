import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItempageComponent } from './itempage.component';
import { RatingComponent } from './rating/rating.component';

import { FormsModule } from '@angular/forms';
import { ColorPipe } from './filters/color.pipe';
import { ItemPipe } from './filters/item.pipe';
import { GenderPipe } from './filters/gender.pipe';
import { SearchPipe } from './filters/search.pipe';
import { BrandPipe } from './filters/brand.pipe';
import { SliderPipe } from './filters/slider/slider.pipe';

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule
  ],
  declarations: [ItempageComponent, ColorPipe, ItemPipe, GenderPipe, SearchPipe, BrandPipe, SliderPipe, RatingComponent],
  exports: [ItempageComponent]
})
export class ItempageModule { }
