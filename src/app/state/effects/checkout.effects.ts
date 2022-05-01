import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { CheckoutService } from 'src/app/services/checkout.service';
import { fetchStates, initalizeStates } from '../actions/checkout.actions';

@Injectable()
export class CheckoutEffects {

  loadStates$ = createEffect(() =>
    this.actions$.pipe(
      // ofType('[Cart CheckoutComp] fetchStates'), // '[Cart CheckoutComp] fetchStates' 
      // middleware like strucutre, if fetchStates action dispatched, below code will be executed
      ofType(fetchStates.type), // '[Cart CheckoutComp] fetchStates' 
      mergeMap(() => this.checkoutService.getStates()
        .pipe(
          map(states => initalizeStates({states})),
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