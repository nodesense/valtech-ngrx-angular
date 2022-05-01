// state manipulation functions
// implement actions logic/business loic
// pure functions

// reducers are called by store.dispatch
// reduce should be sync, no async, no api call, no timer etc
// each reducer responsible for implementing own state based on action
// every reducer called with prev states, reducer should do immutable operations,
// should not mutate existing state, it should be always immutable 

import { createReducer, on } from '@ngrx/store';
import { decrement, increment, reset } from '../actions/counter.actions';

export const initialState = 0; // starting data, used to initialize state

const _counterReducer = createReducer(initialState,
  on(increment, state => state + 1), // is called when increment action dispatched
  on(decrement, state => state - 1), // is called when decrement action dispatched
  on(reset, state => 0), // is called when reset action dispatched
);

// called at begining, to initalize default state
// called every time when action dispatched
export function counterReducer(state, action) {
    console.log("counterReducer called ", state, action)
  return _counterReducer(state, action);
}