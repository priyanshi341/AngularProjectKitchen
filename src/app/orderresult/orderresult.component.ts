import { Component, OnInit } from '@angular/core';
import { Order } from '../order';

@Component({
  selector: 'app-orderresult',
  templateUrl: './orderresult.component.html',
  styleUrls: ['./orderresult.component.css']
})
export class OrderresultComponent implements OnInit {
getorder:Order;
  constructor() { }

  ngOnInit(): void {
    this.getorder=JSON.parse(sessionStorage.getItem('orderdetails'));
    console.log(this.getorder);
  }

}
