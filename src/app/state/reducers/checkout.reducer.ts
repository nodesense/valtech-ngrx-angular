// checkout.reducer.ts
import { createReducer, on } from '@ngrx/store';
import { checkoutStatus, initalizeCities, initalizeOrder, initalizeStates } from '../actions/checkout.actions';
import { CheckoutState } from '../models/checkout-state';
;

export const INITIAL_STATE: CheckoutState = {
   cities: [],
   states: [],
   status: false,
   order: null
}
 
const _checkoutReducer = createReducer(INITIAL_STATE,
    on(initalizeStates, (state, action) =>  {
        return {...state, states: action.states}
    }),  

    on(initalizeCities, (state, action) =>  {
        return {...state, cities: action.cities}
    }),
    
    on(checkoutStatus, (state, action) =>  {
        return {...state, status: action.status}
    }),  
    
    on(initalizeOrder, (state, action) =>  {
        return {...state, order: action.order}
    }),  
    
     
    
  );


// called at begining, to initalize default state
// called every time when action dispatched
export const  checkoutReducer = (state, action) => {
    console.log("checkoutReducer called ", state, action)
  return _checkoutReducer(state, action);
}