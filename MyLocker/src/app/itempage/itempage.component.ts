import { Component, OnInit } from '@angular/core';
import { Product } from '../models';
import { ApiService } from '../api.service';
import { CustomerService } from '../customer.service';
import { NeedAuthGuard } from '../auth-guard'

@Component({
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
  filterPrice = '';

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
    if(!this.favorites.find( ( (i: any) => i.id == pId) )){
      this.api.addFavorite(pId,this.customer.getId()).subscribe(
        () => {
          this.ngOnInit();
        }
      );
    }
  }

  isFav(pId:string){
    if(this.favorites.find( ( (i: any) => i.id == pId) )){
      return true;
    }
  }

  ratingComponentClick(clickObj: any): void {
    if(this.authGuard.authIsLogged){
      const item = this.product.find( ( (i: any) => i.id === clickObj.itemId) );
      let index = this.product.indexOf(item);
      if (!!item) {
        this.api.setProductRating(this.customer.getId(),clickObj.itemId, clickObj.rating).subscribe(
          (product) => {
            clickObj.rating = product[0].rating;
            this.ngOnInit();          }
        );
      }
    }
    else{
      alert("Please log in to rate!");
    }
  }
}
