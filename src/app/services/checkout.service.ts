import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { City } from '../state/models/city';
import { Order } from '../state/models/order';
import { State } from '../state/models/state';



const API_ENDPOINT =  'http://localhost:7070'

@Injectable({
  providedIn: 'root'
})
export class CheckoutService {
  // HttpClient uses RXJS for Ajax calls

  constructor(private http: HttpClient) {
     console.log("Checkout Service created")
   }

   getStates(): Observable<State[]> {
      return this.http.get<State[]> (`${API_ENDPOINT}/api/states`)
   }

   getCities(stateId: number): Observable<City[]> {
     return this.http.get<City[]> (`${API_ENDPOINT}/api/cities?stateId=${stateId}`)
   }

   checkout(order: Order): Observable<Order> {
     return this.http.post<Order>(`${API_ENDPOINT}/api/orders`, order)
   }
}