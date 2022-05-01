// app-state.ts
import { CartState } from "./cart-state";
import { CheckoutState } from "./checkout-state";

export  interface AppState  {
  count: number;
  cart: CartState;
  checkout: CheckoutState;
}