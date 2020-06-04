import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';
import { OrderData, Stage } from '../../models/OrderData';
import { OrderService } from "../../services/order.service";

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.scss']
})
export class CardListComponent implements OnInit {

  @Input() listData: OrderData[];
  @Input() cardTitle: string;
  @Input() link: string;
  @Input() large: boolean;
  @Input() accent: string;
  @Input() showButton = true;
  @Input() toStage: Stage;
  @Output() loadData = new EventEmitter();
  constructor(private orderService: OrderService) { }

  ngOnInit(): void {
  }

  updateOrder(order: OrderData) {
    console.log('hoi')
    this.orderService.updateOrder(order, this.toStage).subscribe(r => {
      console.log('res', r);
      this.loadData.emit();
    })
  }

}
