import { createReducer, on } from '@ngrx/store';
import { addToCart, removeFromCart, clearCart } from './cart.action';
import { productDetails } from '../classes/product';


export const initialState: productDetails[] = [];

export const cartReducer = createReducer(
  initialState,
  on(addToCart , (state , {item})=> [...state , item]),
  on(removeFromCart , (state , {productId}) =>state.filter(item=> item.id !== productId)),
  on(clearCart , () => [])

);
