import {createAction, props} from '@ngrx/store';
import { CartItem } from '../models/cart-item';

// add item to shopping cart
export const addItemToCart = createAction(
    // [ModuleName ComponentName/Optional] Action"
    '[Cart CartComp] addItemToCart',
    props<{ item: CartItem }>()
  );

// remove item from shopping cart

export const removeItemFromCart = createAction(
    '[Cart CartComp] removeItemFromCart',
    props<{ id: number }>()
  );


// empty cart
export const emptyCart = createAction(
    '[Cart CartComp] emptyCart'
);