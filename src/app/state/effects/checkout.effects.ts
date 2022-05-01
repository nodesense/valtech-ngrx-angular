import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { CheckoutService } from 'src/app/services/checkout.service';
import { fetchCities, fetchStates, initalizeCities, initalizeStates } from '../actions/checkout.actions';

@Injectable()
export class CheckoutEffects {

  loadStates$ = createEffect(() =>
    this.actions$.pipe(
      // ofType('[Cart CheckoutComp] fetchStates'), // '[Cart CheckoutComp] fetchStates' 
      // middleware like strucutre, if fetchStates action dispatched, below code will be executed
      ofType(fetchStates), // '[Cart CheckoutComp] fetchStates' 
      mergeMap(() => this.checkoutService.getStates()
        .pipe(
          map(states => initalizeStates({states})),
          catchError(() => of({ type: '[Movies API] Movies Loaded Error' }))
        )
      )
    )
  );

  
  loadCities$ = createEffect(() =>
    this.actions$.pipe(
      // ofType('[Cart CheckoutComp] fetchStates'), // '[Cart CheckoutComp] fetchStates' 
      // middleware like strucutre, if fetchStates action dispatched, below code will be executed
      ofType(fetchCities), // '[Cart CheckoutComp] fetchCities' 
      mergeMap((action) => this.checkoutService.getCities(action.stateId)
        .pipe(
          map(cities => initalizeCities({cities})),
          catchError(() => of({ type: '[Movies API] Movies Loaded Error' }))
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private checkoutService: CheckoutService
  ) {}
}