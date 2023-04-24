import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { ProductService } from '../product.service';
import { Order } from '../order';
import { Router } from '@angular/router';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {
checkproduct:Product;
product:Product[];
total:number;
msg:string="";
dt:Date=new Date(); 
userid:number;
order:Order;
  constructor(private serv:ProductService,private router:Router) { }

  
  ngOnInit(): void {
    this.product=JSON.parse(sessionStorage.getItem('selectedproducts'));
  this.total=parseInt(sessionStorage.getItem('totalamount'));
  this.userid=parseInt(sessionStorage.getItem('userid'));
  }
onsubmit()
{
  for(let i=0;i<this.product.length;i++)
  {
    this.msg+='('+i+')'+" "+this.product[i].productname+"<br/>";
  }
  this.order=new Order(this.product.length,this.total,this.userid,this.dt.toDateString(),this.msg);
  sessionStorage.setItem('orderdetails',JSON.stringify(this.order));
  this.router.navigate(['orderresult']);
  
}




   
   
  



}
