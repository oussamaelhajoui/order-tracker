import {Component, Input, OnInit, HostBinding, Output, EventEmitter} from '@angular/core';
import { OrderService } from 'src/app/services/order.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { NbToastrService } from '@nebular/theme';

@Component({
  selector: 'app-insert-order',
  templateUrl: './insert-order.component.html',
  styleUrls: ['./insert-order.component.scss']
})
export class InsertOrderComponent implements OnInit {
  @Input() izan: string;  
  @Input() index: number;
  
  submitted = false;
  
  @HostBinding('class')
  classes = 'example-items-rows';
  
  constructor(public orderService: OrderService, private toastrService: NbToastrService, ) {
   }


  ngOnInit(): void {
    console.log('prop', this.izan)
  }

  insertOrder = new FormGroup({
    klantnaam: new FormControl('', [Validators.required]),
    product: new FormControl('', [Validators.required]),
    aantal: new FormControl('',[Validators.required]),
    prijs: new FormControl('',[Validators.required]),
    straat: new FormControl('',[Validators.required]),
    postcode: new FormControl('',[Validators.required]),
    stad: new FormControl('',[Validators.required]),
    land: new FormControl('',[Validators.required]),
  });
  
  onSubmit() { 
    console.warn(this.insertOrder.value);
    console.warn('kijkje', this.insertOrder.errors, this.insertOrder.status, this.insertOrder.invalid)
    this.submitted = true;

    const req = this.insertOrder.value;
    if (this.insertOrder.invalid) {
      return;
    }
    this.orderService.saveOrder(this.insertOrder.value).subscribe( res => {
      console.info(res)
      this.showToast('bottom-right', 'success')
    })

  }




  showToast(position, status) {
    console.log('ewq')
    this.toastrService.show(
      status || 'Success',
      `Product toegevoegd`,
      { position, status });
  }
}
