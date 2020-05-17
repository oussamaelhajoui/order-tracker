import {Component, Input, OnInit} from '@angular/core';
import {OrderData} from '../../models/OrderData';

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
  constructor() { }

  ngOnInit(): void {
  }

}
