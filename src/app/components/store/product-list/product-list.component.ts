import { Component, OnInit } from '@angular/core';
import { ProductsService } from './product-list.component.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products: any;

  constructor(private productsService: ProductsService) { }

  ngOnInit() {
    this.products = this.productsService.getProduct().subscribe(data => {
      console.log(data)
      this.products = data;
    })
  }
}
