import { Address } from "./address";
import { CartItem } from "./cart-item";

export class Order {
    fullName: string;
    coupon: string;
    address: Address = {city: 0, state: 0}; // no error for pincode since it is optional
 
    amount: number;
    totalItems: number;
    items: CartItem[] = [];

}