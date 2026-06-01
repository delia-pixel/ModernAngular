import { Component, computed, signal } from '@angular/core';
import { ProductsCard } from '../products-card/products-card';
import { Product } from '../product';
import { MatIcon } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';

@Component({
  selector: 'app-products-grid',
  imports: [ProductsCard, MatIcon, FormsModule, MatInputModule, MatFormFieldModule],
  templateUrl: './products-grid.html',
  styleUrl: './products-grid.scss',
})
export class ProductsGrid {
  protected readonly searchTerm = signal('');

  protected readonly products = signal<Product[]>([
    {
      id: 1,
      name: 'Premium Wireless Headphones',
      description: 'Premium wireless headphones with noise cancellation and premium sound quality.',
      price: 199.99,
      originalPrice: 249.99,
    },
    {
      id: 2,
      name: 'Smart Fitness Watch',
      description:
        'Track your fitness goals with this smart fitness watch featuring heart rate monitoring and GPS.',
      price: 299.99,
    },
    {
      id: 3,
      name: 'Portable Bluetooth Speaker',
      description:
        'Compact portable Bluetooth speaker with excellent sound quality and long battery life.',
      price: 79.99,
      originalPrice: 99.99,
    },
  ]);

  protected clearSearch() {
    this.searchTerm.set('');
  }

  protected fiterProducts = computed(() => {
    const term = this.searchTerm().toLowerCase().trim();
    if (!term) return this.products();

    return this.products().filter(
      (product) =>
        product.name.toLocaleLowerCase().includes(term) ||
        product.description.toLocaleLowerCase().includes(term),
    );
  });

  protected onAddToCard(product: Product) {
    console.log('Product added to cart', product);
  }
}
