import { Injectable } from '@angular/core';
import {map} from 'rxjs/operators';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {OrderData} from '../models/OrderData';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  orders: OrderData[] = [];

  constructor(private http: HttpClient) {
    this.load();
  }

  loadOrderData(): Observable<OrderData[]> {
    return this.http.get(`${environment.api}/orders`).pipe(
      map(response => User.deserialize(response['data']))
    );
  }

  load() {
      this.loadOrderData().subscribe(
        (orderData: OrderData[]) => {
          this.orders = orderData;
        },
        (error) => {
          console.log('Could not load the data', error);
        }
      );
  }



  saveOrderData(): Observable<OrderData[]> {
    return this.http.get(`${environment.api}/orders`).pipe(
      map(response => User.deserialize(response['data']))
    );
  }
  saveOrder() {
  }
}
