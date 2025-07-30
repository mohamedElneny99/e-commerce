import { createAction, props } from '@ngrx/store';
import { productDetails } from '../classes/product';



  export const addToCart= createAction(
    '[Cart] Add to Cart',
    props<{ item: productDetails }>());

  export const removeFromCart = createAction(
    '[Cart] Remove from Cart',
    props<{ productId: number }>()
  );

  export const clearCart = createAction(
    '[Cart] Clear Cart'
  );



