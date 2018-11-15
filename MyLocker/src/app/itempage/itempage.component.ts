import { Component, OnInit } from '@angular/core';
import { Product } from '../models';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-itempage',
  templateUrl: './itempage.component.html',
  styleUrls: ['./itempage.component.css']
})
export class ItempageComponent implements OnInit {

  product: Product;

  constructor(
    private api: ApiService,
  ) { }

  ngOnInit() {
    this.api.getAllData().subscribe(
      (product) => {
        this.product = product;
    });
  }

}
