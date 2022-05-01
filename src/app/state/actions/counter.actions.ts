// increment numebr by 1, decrement by 1 and reset to 0

import { createAction } from '@ngrx/store';

// text should be unique, should not be ambigous
export const increment = createAction('[Counter Component] Increment');
export const decrement = createAction('[Counter Component] Decrement');
export const reset = createAction('[Counter Component] Reset');

//Every action, mandatorily has one type property + optionally more properties

//increment.type // type is used by redux reducers