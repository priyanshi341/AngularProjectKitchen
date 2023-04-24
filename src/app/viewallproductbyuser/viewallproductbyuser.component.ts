import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { ProductService } from '../product.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-viewallproductbyuser',
  templateUrl: './viewallproductbyuser.component.html',
  styleUrls: ['./viewallproductbyuser.component.css']
})
export class ViewallproductbyuserComponent implements OnInit {
  total:number=0;
  product:Product[];
  getproduct:Product;
  ename:string="";
  getselectedproduct:Product[]=[];
  constructor(private serv:ProductService,private router:Router) { }

  ngOnInit(): void {
   this.method();
  }
method()
{
  this.serv.getallproduct().subscribe(data=>{
    this.product=data;
  });
}

actionbutton(id:number)
{
  this.serv.getproductbyid(id).subscribe(data=>{
    this.getproduct=data;
    this.total=this.total+this.getproduct.productprice;
    this.getselectedproduct.push(this.getproduct);
   
  console.log(this.getselectedproduct);
  });
  
}

submitaction()
{
  sessionStorage.setItem('selectedproducts',JSON.stringify(this.getselectedproduct));
  sessionStorage.setItem('totalamount',this.total.toString());
  this.router.navigate(['order']);
 
}

search()
{
  if(this.ename=="")
  {
    this.method();
  }
  else{
    this.product=this.product.filter(res=>
      {
        return res.productname.toLocaleLowerCase().match(this.ename);
      });
  }
}
}
