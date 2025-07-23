import { Component, OnInit } from '@angular/core';
import { CartService } from '../service/cart.service';
import { productDetails } from '../classes/product';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
})
export class CartComponent implements OnInit {
  cartItems: productDetails[] = [];

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.cartItems = this.cartService.getCartItems();
  }

  clearCart() {
    this.cartService.clearCart();
    this.cartItems = [];
  }

  removeItem(id: number) {
  this.cartService.removeFromCart(id);
  this.cartItems = this.cartService.getCartItems();
}

}
