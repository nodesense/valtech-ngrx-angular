import { createSelector } from "@ngrx/store";
import { AppState } from "../models/app-state";
import { CartState } from "../models/cart-state";

// memoized, cache the result , given same argument, cache teh result , 
// return cached result when the function called next time same argugment
// add(10, 20) - 30 - cache
// add(10, 20) - 30

// selectors works like memoized

// from the total app state [all store states], we pick cart
export const selectCart = (state: AppState) => state.cart;

// if cart is not modified/ [it was momozied], then no function made below code
export const selectCartAmount = createSelector(
    selectCart,
    (state: CartState) => state.amount
  );


// if cart is not modified/ [it was momozied], then no function made below code
export const selectCartTotalItems = createSelector(
    selectCart,
    (state: CartState) => state.totalItems
  );

  
// if cart is not modified/ [it was momozied], then no function made below code
export const selectCartItems = createSelector(
    selectCart,
    (state: CartState) => state.items
  );