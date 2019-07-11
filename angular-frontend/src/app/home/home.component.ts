import { Component, OnInit } from '@angular/core';
import { ProductService } from '../shared/product.service';
import { Product } from '../shared/product';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {

  products: Product[] = [];
  constructor(private ProductService: ProductService) {

  }

  ngOnInit() {
    this.products = this.ProductService.getProducts();
  }

}
