import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Product } from '../product';
import { Router } from '@angular/router';
@Component({
  selector: 'app-viewallproductbyadmin',
  templateUrl: './viewallproductbyadmin.component.html',
  styleUrls: ['./viewallproductbyadmin.component.css']
})
export class ViewallproductbyadminComponent implements OnInit {
product:Product[];
  constructor(private serv:ProductService,private route:Router) { }

  ngOnInit(): void {
   this.method();
  }
method()
{
  this.serv.getallproduct().subscribe(data=>{
    this.product=data;
  });
}
  onbuttonclick(id:number)
  {
    this.serv.deletebyid(id).subscribe(data=>{

      this.method();
    });
  }

  updatebuttonclick(id:number)
  {
    
     this.route.navigate(['updateproduct',id]);
    
  }
}
