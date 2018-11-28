import { Component, OnInit } from '@angular/core';
import { Product } from '../models';
import { ApiService } from '../api.service';
import { CustomerService } from '../customer.service';
import { NeedAuthGuard } from '../auth-guard'

@Component({
  selector: 'app-itempage',
  templateUrl: './itempage.component.html',
  styleUrls: ['./itempage.component.css']
})
export class ItempageComponent implements OnInit {

  product: Product[] = [];
  favorites: Product[] = [];

  imgShow = false;

  filterColor = '';
  filterItem = '';
  filterGender = '';
  filterSearch = '';
  filterBrand = '';

  constructor(
    private api: ApiService,
    private customer: CustomerService,
    private authGuard: NeedAuthGuard
  ) {}

  ngOnInit() {
    this.api.getAllData().subscribe(
      (product) => {
        this.product = product;
      });
      this.api.getFavorites(this.customer.getId()).subscribe(
        (favorites) => {
          this.favorites = favorites;
        });
  }

  addFavorite(pId:string){
    if(!this.favorites.find( ( (i: any) => i.id === pId) )){
      this.api.addFavorite(pId,this.customer.getId()).subscribe(
        () => {}
      );
    }
  }

  ratingComponentClick(clickObj: any): void {
    const item = this.product.find( ( (i: any) => i.id === clickObj.itemId) );
    if (!!item) {
      item.rating = clickObj.rating;
      this.api.setProductRating(clickObj.itemId, clickObj.rating);
    }
  }

  showImg(){
    this.imgShow = !this.imgShow;
    console.log(this.imgShow);
  }
}
