// checkout.actions.ts

import {createAction, props} from '@ngrx/store';
import { City } from '../models/city';
import { Order } from '../models/order';
import { State } from '../models/state';

export const initalizeCities = createAction(
    // [ModuleName ComponentName/Optional] Action"
    '[Cart CheckoutComp] initalizeCities',
    props<{ cities: City[] }>()
  );
 

 export const initalizeStates = createAction(
    // [ModuleName ComponentName/Optional] Action"
    '[Cart CheckoutComp] initalizeStates',
    props<{ states: State[] }>()
  );

  
 export const initializeOrder = createAction(
    // [ModuleName ComponentName/Optional] Action"
    '[Cart CheckoutComp] initalizeOrder',
    props<{ order: Order }>()
  );
  
  // used by effect
  export const fetchStates = createAction(
    // [ModuleName ComponentName/Optional] Action"
    '[Cart CheckoutComp] fetchStates'
  );

  // used by effect
  export const fetchCities = createAction(
    // [ModuleName ComponentName/Optional] Action"
    '[Cart CheckoutComp] fetchCities',
    props<{ stateId: number }>()
  );
  
export const checkoutStatus = createAction(
    // [ModuleName ComponentName/Optional] Action"
    '[Cart CheckoutComp] checkoutStatus',
    props<{ status: boolean }>()
  );
 
 
export const checkout = createAction(
    // [ModuleName ComponentName/Optional] Action"
    '[Cart CheckoutComp] checkout',
    props<{ order: Order }>()
  );
 
