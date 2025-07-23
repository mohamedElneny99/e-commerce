import { Injectable } from '@angular/core';
import { productDetails } from '../classes/product';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

 private cartItems: productDetails[] = [];
  private cartCount = new BehaviorSubject<number>(0);

  cartCount$ = this.cartCount.asObservable();

  addToCart(product: productDetails) {
    this.cartItems.push(product);
    this.cartCount.next(this.cartItems.length);
  }

  getCartItems(): productDetails[] {
    return this.cartItems;
  }

  clearCart() {
    this.cartItems = [];
    this.cartCount.next(0);
  }

  removeFromCart(productId: number) {
  this.cartItems = this.cartItems.filter(item => item.id !== productId);
   this.cartCount.next(this.cartItems.length);
}

}
