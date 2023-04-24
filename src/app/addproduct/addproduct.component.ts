import { Component, OnInit } from '@angular/core';
import { FormBuilder,Validators } from '@angular/forms';
import { ProductService } from '../product.service';
import { validateLocaleAndSetLanguage } from 'typescript';
@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent implements OnInit {

  constructor(private serv:ProductService,private builder:FormBuilder) { }

  ngOnInit(): void {
  }

  addproductform=this.builder.group({
    productname:this.builder.control('',Validators.required),
    productprice:this.builder.control('',Validators.required)
  });

  addbutton()
  {
    this.serv.addproduct(this.addproductform.value).subscribe(data=>{
      alert("added the product successfully");
    });
  }
}
