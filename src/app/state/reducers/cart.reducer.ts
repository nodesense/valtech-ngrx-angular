
import { createReducer, on } from '@ngrx/store';
import { addItemToCart, emptyCart, removeItemFromCart } from '../actions/cart.actions';
import { CartItem } from '../models/cart-item';
import { CartState } from '../models/cart-state';

export const INITIAL_STATE: CartState = {
    items: [],
    amount: 0,
    totalItems: 0
}

// MEMORIZE function, TODO
export const calculate = (items: CartItem[]) => {
    console.log("Calculate total ", items)
    let totalItems = 0, amount = 0
    for (let item of items) {
        totalItems += item.qty
        amount += item.qty * item.price
    }

    return {
        amount,  // amount: amount
        totalItems 
    }
} 

const _cartReducer = createReducer(INITIAL_STATE,
    on(addItemToCart, (state, action) =>  {
        // return new state
        const items = [...state.items, action.item]
        // destructuring object into variable
        const {amount, totalItems} = calculate(items) 

        // return new state , this state shall be stored in store
        return {
            items, 
            amount, 
            totalItems
        }
    }),  
    on(removeItemFromCart, (state, action) =>  {
        const items = state.items.filter(item => item.id !== action.id)
               // destructuring object into variable
        const {amount, totalItems} = calculate(items) 

        // return new state , this state shall be stored in store
        return {
            items, 
            amount, 
            totalItems
        }
    }),   
    on(emptyCart, state =>  {
        const items = []
        const {amount, totalItems} = calculate(items) 

        // return new state , this state shall be stored in store
        return {
            items, 
            amount, 
            totalItems
        }
    }),  
  );


// called at begining, to initalize default state
// called every time when action dispatched
export const  cartReducer = (state, action) => {
    console.log("_cartReducer called ", state, action)
  return _cartReducer(state, action);
}