import { Component, OnInit } from '@angular/core';
import { OrderServiceService } from '../shared/order-service.service';

@Component({
  selector: 'app-printoption',
  templateUrl: './printoption.component.html',
  styleUrls: ['./printoption.component.css']
})
export class PrintoptionComponent implements OnInit {
  orderName:string="";
  orderInvoice:any;
  constructor(public service: OrderServiceService) { }

  ngOnInit(): void {
  }
  clickSearchOrder(){
      this.orderName = this.orderName;
      this.service.getOrderSearch(this.orderName).subscribe(res => {
       this.orderInvoice = res
     })
  if(this.orderInvoice.length > 0)
  {
  window.print();
  }   
}
  }

