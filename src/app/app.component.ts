import { Component } from '@angular/core';
import { Product } from './product.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'feb23';
  products: Product[];

  constructor(){
    this.products =this.products = [
      new Product(
      'MYSHOES',
      'Black Running Shoes',
      '/assets/images/products/cool1.jpg',
      ['Men', 'Shoes', 'Running Shoes'],
      109.99),
      new Product(
      'NEATOJACKET',
      'Blue Jacket',
      '/assets/images/products/cool2.jpg',
      ['Women', 'Apparel', 'Jackets & Vests'],
      238.99),
      new Product(
      'NICEHAT',
      'A Nice Black Hat',
      '/assets/images/products/cool3.jpg',
      ['Men', 'Accessories', 'Hats'],
      29.99)
      ];
  }

  productWasSelected(product: Product):void{
    console.log('Product was clicked! ', product);
  }
}
