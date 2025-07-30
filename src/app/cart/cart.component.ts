import { CommonModule } from '@angular/common';
import { Component , OnInit , inject } from '@angular/core';
import { productDetails } from '../classes/product';
import { clearCart, removeFromCart } from './cart.action';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from '../app.state';
import { selectCartItems } from './cart.selectors';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
  standalone: true,
  imports: [RouterLink, RouterLinkActive , CommonModule],
})
export class CartComponent  implements OnInit {
  cartItems$: Observable<productDetails[]>;
  private store = inject(Store<AppState>);

  trackById(index: number, item: any): any {
  return item.id;
}


  ngOnInit() {
    this.cartItems$= this.store.select(selectCartItems);

  }

  removeItem(id: number) {
    this.store.dispatch(removeFromCart({ productId: id }));
  }

  clearCart(){
    this.store.dispatch(clearCart());
  }

}














// import { Component, OnInit } from '@angular/core';
// import { CartService } from '../service/cart.service';
// import { productDetails } from '../classes/product';

// import { RouterLink, RouterLinkActive } from '@angular/router';

// @Component({
//   selector: 'app-cart',
//   templateUrl: './cart.component.html',
//   styleUrls: ['./cart.component.css'],
//   standalone: true,
//   imports: [RouterLink, RouterLinkActive],
// })
// export class CartComponent implements OnInit {

//   cartItems: productDetails[] = [];

//   constructor(private cartService: CartService) {}

//   ngOnInit(): void {
//     this.cartItems = this.cartService.getCartItems();
//   }

//   clearCart() {
//     this.cartService.clearCart();
//     this.cartItems = [];
//   }

//   removeItem(id: number) {
//   this.cartService.removeFromCart(id);
//   this.cartItems = this.cartService.getCartItems();
// }

// }
