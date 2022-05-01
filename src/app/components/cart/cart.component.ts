import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { addItemToCart, emptyCart, removeItemFromCart } from 'src/app/state/actions/cart.actions';
import { AppState } from 'src/app/state/models/app-state';
import { CartItem } from 'src/app/state/models/cart-item';
import { CartState } from 'src/app/state/models/cart-state';
import { selectCartAmount, selectCartItems, selectCartTotalItems } from 'src/app/state/selectors/cart.selector';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  cartState$: Observable<CartState>;
  amount$: Observable<number>;
  totalItems$: Observable<number>;
  items$: Observable<CartItem[]>;

  constructor(private store: Store<AppState>) { 
    // observable, we use them iwth subscribe or async pipe
    // any property with in cartState changed, it amoutnt, totalITems, items
    // subscribe shall be called, angular will do dirty check/comparision
    // works, not a good practice
    this.cartState$ = this.store.select('cart')
    this.amount$ = this.store.select(selectCartAmount)
    this.totalItems$ = this.store.select(selectCartTotalItems)
    this.items$ = this.store.select(selectCartItems)
  }

  ngOnInit(): void {
  }

  addItem() {
    const id = Math.ceil(Math.random() * 100000)
    const qty = Math.ceil(Math.random() * 10)
    const price = Math.ceil(Math.random() * 100)

    const item = new CartItem(id, `Product ${id}`, price, qty)
     
    // dispatch action, this goes to reducer
    // dispatch shall call reducer, the output of reducer shall be updated in store
    // when store is updated, this.amoutn$, items$, totalItems$ susbcribe/async pipe called to update ui
    this.store.dispatch(addItemToCart({item}))
  }

  removeItem(id: number) {
    this.store.dispatch(removeItemFromCart({id}))
  }

  emptyCart() {
   this.store.dispatch(emptyCart())
  }

}
