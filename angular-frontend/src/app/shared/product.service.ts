import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from './product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private httpClient: HttpClient) { }

  getProducts(): Product[] {
    const products: Product[] = [];
    this.httpClient.get<Product[]>("/api/products").subscribe(data => products.push(...data), err => console.log(err));
    //this.httpClient.get<Product[]>("/api/products").subscribe({ next: (data) => { products.push(...data) }, error: (err) => { console.log(err) } });
    return products;
  }

  getProductById(productId: number): Product {
    const product: Product = <Product>{};

    this.httpClient.get<Product>(`/api/products/${productId}`).subscribe(data => Object.assign(product, data), err => console.log(err))
    return product;
  }
}

