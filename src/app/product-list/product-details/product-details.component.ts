

import { NgStyle } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { productDetails } from '../../classes/product';
import { ProductsService } from '../../service/products.service';
import { CartService } from '../../service/cart.service';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [NgStyle, RouterLink],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent implements OnInit {
  selectedProduct: productDetails | undefined;
  itemId: number;
  toastMessage: string = '';
  showToast: boolean = false;


  constructor(
     private productService: ProductsService,
     private activateRoute: ActivatedRoute,
     private cartService: CartService
  ) {}

  ngOnInit() {
    this.activateRoute.paramMap.subscribe((params) => {
      const idParam = params.get('id');
      this.itemId = idParam ? +idParam : -1;

      const allProducts = this.productService.getProducts();
      this.selectedProduct = allProducts.find((item) => item.id === this.itemId);
    });
  }

   addToCart(product: productDetails) {
    this.cartService.addToCart(product);
    this.toastMessage = `${product.name} added to cart!`;
    this.showToast = true;
    setTimeout(() => (this.showToast = false), 3000);
  }
}
