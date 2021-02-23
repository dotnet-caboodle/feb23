import { Component, OnInit, Input, HostBinding } from '@angular/core';
import { Product } from '../product.model';

@Component({
  selector: 'produt-row',
  templateUrl: './produt-row.component.html',
  styleUrls: ['./produt-row.component.css']
})
export class ProdutRowComponent implements OnInit {

  @Input() product: Product;
  @HostBinding('attr.class') cssClass ='item';

  constructor() { }

  ngOnInit(): void {
  }

}
