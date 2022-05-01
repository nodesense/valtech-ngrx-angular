import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { dispatch } from 'rxjs/internal/observable/pairs';
import { filter, map } from 'rxjs/operators';
import { checkout, fetchCities, fetchStates } from 'src/app/state/actions/checkout.actions';
import { AppState } from 'src/app/state/models/app-state';
import { City } from 'src/app/state/models/city';
import { Order } from 'src/app/state/models/order';
import { State } from 'src/app/state/models/state';
import { selectCartItems } from 'src/app/state/selectors/cart.selector';
import { selectCities, selectOrder, selectStates, selectStatus } from 'src/app/state/selectors/checkout.selector';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {

  states$: Observable<State[]>;
  cities$: Observable<City[]>;
  
  status$: Observable<boolean>;
  
  order$: Observable<Order>;

  checkoutForm: FormGroup;
  firstName: FormControl;
  city: FormControl;
  state: FormControl;

  order: Order = new Order()

  constructor(private store: Store<AppState>,
              private formBuilder: FormBuilder
    ) {
    this.states$ = this.store.select(selectStates)
    this.cities$ = this.store.select(selectCities)
    this.status$ = this.store.select(selectStatus)
    this.order$ = this.store.select(selectOrder)

    


    this.firstName = new FormControl("hello")
    this.state = new FormControl()
    this.city = new FormControl()

    this.checkoutForm = this.formBuilder.group({
      // key: value control
      // key used in html/form control name: component FormControl 
      firstName: this.firstName,
      state : this.state,
      city: this.city
    })
   }

   stateId: any;

  ngOnInit(): void {
    // dispatch an event/action, to fetch states
    // fetchStats action is intercepted by Effect, that would pull data from 
    // api call, initialize states in reducer
    // the component selectors pull latest states and render on ui
    this.store.dispatch(fetchStates())

    this.firstName.valueChanges
                  .pipe (map (value => value.trim()))
                  .pipe ( filter (value => value.length >= 2))
                  .subscribe( value => {
                    console.log("First name ", value)
                    this.order.fullName = value
                  })

    this.checkoutForm.valueChanges
                     .subscribe ( values => {
                       console.log("Values ", values)
                     })

    this.state.valueChanges
              .subscribe (stateId => {
                console.log("reactive state changes", stateId)
                this.order.address.state = +stateId
                this.store.dispatch(fetchCities({stateId}))
              })

      
    this.city.valueChanges
    .subscribe (cityId => {
      console.log("reactive city changes", cityId)
      this.order.address.city = +cityId
    })

    this.store.select(selectCartItems)
              .subscribe (items => {
                this.order.items = items;
              })
  }


  loadCities(stateId: number) {
    // to be intercepted by effects, based on state id, fetch cities, and initialize store
    // this.cities$ to be updated by selector
    this.store.dispatch(fetchCities({stateId}))
  }

  checkout() {
    console.log("checkout called")
    // dispatch an checkout action along with order
    // implement a effect, use echeckout service, checkout funciton, post method
    this.store.dispatch(checkout({order: this.order}))
  }
}
