import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { dispatch } from 'rxjs/internal/observable/pairs';
import { fetchCities, fetchStates } from 'src/app/state/actions/checkout.actions';
import { AppState } from 'src/app/state/models/app-state';
import { City } from 'src/app/state/models/city';
import { Order } from 'src/app/state/models/order';
import { State } from 'src/app/state/models/state';
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

  constructor(private store: Store<AppState>) {
    this.states$ = this.store.select(selectStates)
    this.cities$ = this.store.select(selectCities)
    this.status$ = this.store.select(selectStatus)
    this.order$ = this.store.select(selectOrder)
   }

   stateId: any;

  ngOnInit(): void {
    // dispatch an event/action, to fetch states
    // fetchStats action is intercepted by Effect, that would pull data from 
    // api call, initialize states in reducer
    // the component selectors pull latest states and render on ui
    this.store.dispatch(fetchStates())
  }


  loadCities(stateId: number) {
    // to be intercepted by effects, based on state id, fetch cities, and initialize store
    // this.cities$ to be updated by selector
    this.store.dispatch(fetchCities({stateId}))
  }
}
