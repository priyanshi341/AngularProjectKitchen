import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../product.service';
import { Product } from '../product';
import { FormBuilder,Validators } from '@angular/forms';
@Component({
  selector: 'app-updateproduct',
  templateUrl: './updateproduct.component.html',
  styleUrls: ['./updateproduct.component.css']
})
export class UpdateproductComponent implements OnInit {
id:number;
product:Product;
  constructor(private aroute:ActivatedRoute,private serv:ProductService,private builder:FormBuilder,private router:Router) { }

  ngOnInit(): void {
   this.id= this.aroute.snapshot.params['id'];
   this.serv.getproductbyid(this.id).subscribe(data=>{
this.product=data;
   });
  }

  updateproductform=this.builder.group({
    productname:this.builder.control('',Validators.required),
    productprice:this.builder.control('',Validators.required)
  });

  updatefunction()
  {
    this.serv.updateproduct(this.id,this.updateproductform.value).subscribe(data=>{
     this.router.navigate(['/adminviewproduct']);
    });
  }
}
