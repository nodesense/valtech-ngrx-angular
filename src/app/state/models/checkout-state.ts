// models/checkout-state.ts
import { City } from "./city";
import { Order } from "./order";
import { State } from "./state";

export interface CheckoutState {
    states: State[];
    cities: City[];
    status: boolean;
    order: Order
}