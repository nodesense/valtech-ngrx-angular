import { CartItem } from "./cart-item";

export interface CartState {
    items: CartItem[];
    amount: number;
    totalItems: number;
}