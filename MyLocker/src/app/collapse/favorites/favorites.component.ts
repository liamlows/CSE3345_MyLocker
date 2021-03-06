import { Component, OnInit } from '@angular/core';
import { Product } from "../../models";
import { ApiService } from "../../models/api.service";
import { CustomerService } from '../../models/customer.service';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css']
})
export class FavoritesComponent implements OnInit {

  favorites: Product[] = [];

  constructor(
    private api: ApiService,
    private customer: CustomerService,
  ) { }

  ngOnInit() {
    this.api.getFavorites(this.customer.getId()).subscribe(
      (product) => {
        this.favorites = product;
    });
  }

  removeFav(favId:string){
    this.api.removeFavorite(favId).subscribe(
      () => {
        alert("Favorite Removed");
        this.ngOnInit();
      }
    );
  }

}
