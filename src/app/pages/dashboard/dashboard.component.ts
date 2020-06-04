import {
  Component,
  OnInit,
  HostListener,
  TemplateRef,
  ViewChild,
} from '@angular/core';
import { NbWindowService } from '@nebular/theme';
import * as moment from 'moment';
import { InsertOrderComponent } from '../../components/insert-order/insert-order.component';
import { OrderService } from 'src/app/services/order.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {

  fruits = [
    {
      name: 'Johan Dekkers',
      product: 'Stofzuiger',
      amount: '1',
      price: '599',
      city: 'Amsterdam',
      orderDate: moment(new Date('05/04/2020 18:13:43')).fromNow(),
    },
    {
      name: 'Erick Manders',
      product: 'Stofzuiger',
      amount: '1',
      price: '599',
      city: 'Amsterdam',
      orderDate: moment(new Date('05/07/2020 11:16:50')).fromNow(),
    },
    {
      name: 'Drik Makers',
      product: 'Stofzuiger',
      amount: '1',
      price: '599',
      city: 'Amsterdam',
      orderDate: moment(new Date('05/11/2020 11:36:49')).fromNow(),
    },
    {
      name: 'Maikel steef',
      product: 'Stofzuiger',
      amount: '1',
      price: '599',
      city: 'Amsterdam',
      orderDate: moment(new Date('05/13/2020 05:47:24')).fromNow(),
    },
    {
      name: 'Elena story',
      product: 'Stofzuiger',
      amount: '1',
      price: '599',
      city: 'Amsterdam',
      orderDate: moment(new Date('05-16-2020 00:26:19')).fromNow(),
    },
    {
      name: 'Elena story',
      product: 'Stofzuiger',
      amount: '1',
      price: '599',
      city: 'Amsterdam',
      orderDate: moment(new Date('05-16-2020 00:26:19')).fromNow(),
    },
    {
      name: 'Elena story',
      product: 'Stofzuiger',
      amount: '1',
      price: '599',
      city: 'Amsterdam',
      orderDate: moment(new Date('05-16-2020 00:26:19')).fromNow(),
    },
    {
      name: 'Elena story',
      product: 'Stofzuiger',
      amount: '1',
      price: '599',
      city: 'Amsterdam',
      orderDate: moment(new Date('05-16-2020 00:26:19')).fromNow(),
    },
    {
      name: 'Elena story',
      product: 'Stofzuiger',
      amount: '1',
      price: '599',
      city: 'Amsterdam',
      orderDate: moment(new Date('05-16-2020 00:26:19')).fromNow(),
    },
    {
      name: 'Elena story',
      product: 'Stofzuiger',
      amount: '1',
      price: '599',
      city: 'Amsterdam',
      orderDate: moment(new Date('05-16-2020 00:26:19')).fromNow(),
    },
    {
      name: 'Elena story',
      product: 'Stofzuiger',
      amount: '1',
      price: '599',
      city: 'Amsterdam',
      orderDate: moment(new Date('05-16-2020 00:26:19')).fromNow(),
    },
    {
      name: 'Elena story',
      product: 'Stofzuiger',
      amount: '1',
      price: '599',
      city: 'Amsterdam',
      orderDate: moment(new Date('05-16-2020 00:26:19')).fromNow(),
    },
    {
      name: 'Elena story',
      product: 'Stofzuiger',
      amount: '1',
      price: '599',
      city: 'Amsterdam',
      orderDate: moment(new Date('05-16-2020 00:26:19')).fromNow(),
    },
    {
      name: 'Elena story',
      product: 'Stofzuiger',
      amount: '1',
      price: '599',
      city: 'Amsterdam',
      orderDate: moment(new Date('05-16-2020 00:26:19')).fromNow(),
    },
  ];
  @ViewChild('contentTemplate', { static: false }) contentTemplate: TemplateRef<
    any
  >;
  large = false;



  constructor(private windowService: NbWindowService, private orderService: OrderService) { }

  ngOnInit(): void {
    this.onResize();
    this.loadData();
    // this.openWindow();
  }

  openWindow() {
    this.windowService.open(InsertOrderComponent, { title: 'Voeg order in' });
  }

  loadData() {
    this.orderService.loadStageOrderData(0).subscribe(data => {
      this.orderService.toAcceptOrders$ = data["items"];
      console.log('toAcceptOrders', this.orderService.toAcceptOrders$)
    })
    this.orderService.loadStageOrderData(1).subscribe(data => {
      this.orderService.toProcessOrders$ = data["items"];
      console.log('toProcessOrders', this.orderService.toProcessOrders$)
    })
    this.orderService.loadStageOrderData(2).subscribe(data => {
      this.orderService.toShipOrders$ = data["items"];
      console.log('toShipOrders', this.orderService.toShipOrders$)
    })
    this.orderService.loadStageOrderData(3).subscribe(data => {
      this.orderService.shippedOrders$ = data["items"];
      console.log('shippedOrders', this.orderService.shippedOrders$)
    })

    this.orderService.loadOrderData().subscribe(data => {
      this.orderService.allOrders$ = data["items"];
      console.log('allOrders', this.orderService.allOrders$)
    })
  }

  @HostListener('window:resize', ['$event'])
  onResize() {
    if (window.screen.width > 992) {
      this.large = true;
    } else {
      this.large = false;
    }
  }
}
