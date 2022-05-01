import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { StoreModule } from '@ngrx/store';
import { counterReducer } from './state/reducers/counter.reducer';
import { CounterComponent } from './components/counter/counter.component';
import { cartReducer } from './state/reducers/cart.reducer';
import { CartState } from './state/models/cart-state';
import { CartComponent } from './components/cart/cart.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { checkoutReducer } from './state/reducers/checkout.reducer';
import { EffectsModule } from '@ngrx/effects';
import { CheckoutEffects } from './state/effects/checkout.effects';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
 
interface StoreState  {
  count: number;
  cart: CartState
}

// create store

@NgModule({
  declarations: [
    AppComponent,
    CounterComponent,
    CartComponent,
    CheckoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
     // create store with multiple state
     StoreModule.forRoot({
      // state: reducerFunc that manages the state
      // 2 states, each state is managed by respective reducer
      count: counterReducer,
      cart: cartReducer,
      checkout: checkoutReducer
    }),
    
    EffectsModule.forRoot ([
      CheckoutEffects
    ]),

    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
    
  ],
  providers: [
   
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
