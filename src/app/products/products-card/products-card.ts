import { Component, input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { Product } from '../product';
@Component({
  selector: 'app-products-card',
  imports: [MatButtonModule, MatCardModule],
  templateUrl: './products-card.html',
  styleUrl: './products-card.scss',
})
export class ProductsCard {
  readonly product = input.required<Product>();
  readonly addButtonLabel = input('Add to cart');
}
