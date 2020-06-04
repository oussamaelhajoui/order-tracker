import {
  Component,
  OnInit,
  HostListener,
  TemplateRef,
  ViewChild,
} from '@angular/core';
import { NbWindowService } from '@nebular/theme';
import { InsertOrderComponent } from '../../components/insert-order/insert-order.component';
import { OrderService } from 'src/app/services/order.service';
import { Stage } from "../../models/OrderData";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {


  @ViewChild('contentTemplate', { static: false }) contentTemplate: TemplateRef<
    any
  >;
  large = false;
  public stages = Stage;



  constructor(private windowService: NbWindowService, public orderService: OrderService) { }

  ngOnInit(): void {
    this.onResize(null);
    this.loadData();
    // this.openWindow();
  }

  openWindow() {
    let winRef = this.windowService.open(InsertOrderComponent, { title: 'Voeg order in', context: {izan: 'hoi'}});
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
  onResize(event) {
    if (window.screen.width > 992) {
      this.large = true;
    } else {
      this.large = false;
    }
  }
}
