import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { decrement, increment, reset } from 'src/app/state/actions/counter.actions';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent implements OnInit {

  count$: Observable<number>;
 // { count: number } interface for state, count is state name

  constructor(private store: Store<{ count: number }>) {
    this.count$ = store.pipe(select('count'));
  }
 
  increment() {
    const action = increment()
    console.log("Dispatch action ", action)
    // calls reducer, then update state in store
    this.store.dispatch(action);
  }
 
  decrement() {
    // calls reducer, then update state in store
    this.store.dispatch(decrement());
  }
 
  reset() {
    // calls reducer, then update state in store
    this.store.dispatch(reset());
  }

  ngOnInit(): void {
    
  }
}
