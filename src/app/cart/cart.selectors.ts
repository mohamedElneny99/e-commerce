
import { createFeatureSelector , createSelector } from "@ngrx/store";
import { productDetails } from '../classes/product';

export const selectCartFeature= createFeatureSelector<productDetails[]>('cart');

export const selectCartItems = createSelector(
  selectCartFeature,
  (cartItems) => cartItems
);

export const selectCartCount = createSelector(
  selectCartFeature,
  (cartItems) => cartItems.reduce((total, item) => total + (item.quantity || 0), 0)
);
