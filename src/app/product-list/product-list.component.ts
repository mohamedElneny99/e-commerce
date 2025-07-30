import { CommonModule, NgStyle } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ProductsService } from '../service/products.service';
import { productDetails } from '../classes/product';
import {ActivatedRoute, RouterModule} from '@angular/router';
// import { CartService } from '../service/cart.service';
import { Store } from '@ngrx/store';
import { AppState } from '../app.state';
import { addToCart } from '../cart/cart.action';


@Component({
  selector: 'app-product-list',
  imports: [FormsModule, CommonModule, NgStyle, RouterModule],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent implements OnInit {
  isLoading: boolean = false;
  searchBar = '';
  searchUrl: string = '';
  showToast: boolean = false;
  toastMessage: string = '';

  products: productDetails[] = [];

  constructor(
    private productService: ProductsService,
    private activeRoute: ActivatedRoute,
    // private cartService: CartService
    private store: Store<AppState>
  ) {}

  ngOnInit() {
    this.activeRoute.queryParamMap.subscribe((data) => {
      this.searchUrl = data['search'];

      if (!this.searchUrl) {
        this.products = this.productService.getProducts();
      } else {
        this.products = this.productService.getProducts().filter((product) =>
          product.name.toLowerCase().includes(this.searchUrl.toLowerCase())
        );
      }
    });
  }

  filteredProducts() {
    const term = this.searchBar.trim().toLowerCase();
    if (!term) return this.products;
    return this.products.filter(
      (p) =>
        p.name.toLowerCase().includes(term) ||
        p.brand.toLowerCase().includes(term) ||
        p.category.toLowerCase().includes(term)
    );
  }

  addToCart(product: productDetails) {
    // this.cartService.addToCart(product);
      const item = { ...product, quantity: 1 };
      this.store.dispatch(addToCart({ item }));
    this.toastMessage = `${product.name} added to cart!`;
    this.showToast = true;
    setTimeout(() => (this.showToast = false), 3000);
  }

}

