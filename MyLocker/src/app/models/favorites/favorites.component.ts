import { Component, OnInit } from '@angular/core';
import { Product } from "../product";
import { ApiService } from "src/app/api.service";

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css']
})
export class FavoritesComponent implements OnInit {

  product: Product;

  constructor(
    private api: ApiService
  ) { }

  ngOnInit() {
    this.api.getAllData().subscribe(
      (product) => {
        this.product = product;
    });
  }

}
