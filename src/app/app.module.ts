import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { StoreModule } from '@ngrx/store';
import { counterReducer } from './state/reducers/counter.reducer';
import { CounterComponent } from './components/counter/counter.component';
// create store

@NgModule({
  declarations: [
    AppComponent,
    CounterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
     // create store with multiple state
     StoreModule.forRoot({
      // state: reducerFunc that manages the state
      count: counterReducer
    })
  ],
  providers: [
   
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
