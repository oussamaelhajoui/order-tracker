import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OrderService } from 'src/app/services/order.service';
import { Stage } from 'src/app/models/OrderData';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  stage:  string;

  constructor(private route: ActivatedRoute, public orderService: OrderService) { }

  ngOnInit(): void {
    this.stage = this.route.snapshot.paramMap.get("stage")
    console.log(this.stage);
    if(this.stage === "toaccept" && this.orderService.toAcceptOrders$.length <= 0){
      this.orderService.loadStageOrderData(Stage.toAccept).subscribe( res => {
        this.orderService.toAcceptOrders$ = res["items"]
      });
    }


    if(this.stage === "tomanage" && this.orderService.toProcessOrders$.length <= 0){
      this.orderService.loadStageOrderData(Stage.toProcess).subscribe( res => {
        this.orderService.toProcessOrders$ = res["items"]
      });
    }

    if(this.stage === "tosend" && this.orderService.toShipOrders$.length <= 0){
      this.orderService.loadStageOrderData(Stage.toShip).subscribe( res => {
        this.orderService.toShipOrders$ = res["items"]
      });
    }

    if(this.stage === "send" && this.orderService.shippedOrders$.length <= 0){
      this.orderService.loadStageOrderData(Stage.shipped).subscribe( res => {
        this.orderService.shippedOrders$ = res["items"]
      });
    }
        
    
      
      console.log("orders", this.orderService.toAcceptOrders$)
  }

  loadData() {
    console.log('loading data...', this.stage, )

    if(this.stage === "toaccept"){
      console.log('loading.....')
      this.orderService.loadStageOrderData(Stage.toAccept).subscribe( res => {
        console.log('made req', res)
        this.orderService.toAcceptOrders$ = res["items"]
      });
    }


    if(this.stage === "tomanage"){
      this.orderService.loadStageOrderData(Stage.toProcess).subscribe( res => {
        this.orderService.toAcceptOrders$ = res["items"]
      });
    }

    if(this.stage === "tosend"){
      this.orderService.loadStageOrderData(Stage.toShip).subscribe( res => {
        this.orderService.toAcceptOrders$ = res["items"]
      });
    }

    if(this.stage === "send"){
      this.orderService.loadStageOrderData(Stage.shipped).subscribe( res => {
        this.orderService.toAcceptOrders$ = res["items"]
      });
    }

    // this.orderService.loadStageOrderData(0).subscribe(data => {
    //   this.orderService.toAcceptOrders$ = data["items"];
    //   console.log('toAcceptOrders', this.orderService.toAcceptOrders$)
    // })
    // this.orderService.loadStageOrderData(1).subscribe(data => {
    //   this.orderService.toProcessOrders$ = data["items"];
    //   console.log('toProcessOrders', this.orderService.toProcessOrders$)
    // })
    // this.orderService.loadStageOrderData(2).subscribe(data => {
    //   this.orderService.toShipOrders$ = data["items"];
    //   console.log('toShipOrders', this.orderService.toShipOrders$)
    // })
    // this.orderService.loadStageOrderData(3).subscribe(data => {
    //   this.orderService.shippedOrders$ = data["items"];
    //   console.log('shippedOrders', this.orderService.shippedOrders$)
    // })

    // this.orderService.loadOrderData().subscribe(data => {
    //   this.orderService.allOrders$ = data["items"];
    //   console.log('allOrders', this.orderService.allOrders$)
    // })
  }

}
