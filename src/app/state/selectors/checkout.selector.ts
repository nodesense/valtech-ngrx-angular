// checkout.selector.ts

import { createSelector } from "@ngrx/store";
import { AppState } from "../models/app-state";
import { CheckoutState } from "../models/checkout-state";
 
// selectors works like memoized

// from the total app state [all store states], we pick cart
export const selectCheckout = (state: AppState) => state.checkout;

export const selectStates = createSelector(
    selectCheckout,
    (state: CheckoutState) => state.states
  );

export const selectCities = createSelector(
selectCheckout,
(state: CheckoutState) => state.cities
);


export const selectStatus = createSelector(
    selectCheckout,
    (state: CheckoutState) => state.status
    );
    


export const selectOrder = createSelector(
    selectCheckout,
    (state: CheckoutState) => state.order
    );
    