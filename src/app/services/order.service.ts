import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { OrderData, Stage } from '../models/OrderData';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class OrderService {
  allOrders$: OrderData[];
  toAcceptOrders$: OrderData[];
  toProcessOrders$: OrderData[];
  toShipOrders$: OrderData[];
  shippedOrders$: OrderData[];

  constructor(private http: HttpClient) { }

  loadOrderData(): Observable<OrderData[]> {
    return this.http.get<OrderData[]>(`${environment.api}`);
  }

  loadStageOrderData(stage: string | number): Observable<OrderData[]> {
    if (stage) {
      if (typeof stage === "string") {
        stage = Stage[stage as keyof typeof Stage];
      }
    }
    return this.http.get<OrderData[]>(`${environment.api}/${stage}`)
  }

  saveOrder() {
  }
}
