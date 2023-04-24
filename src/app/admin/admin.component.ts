import { Component, OnInit } from '@angular/core';
import { FormBuilder,Validators } from '@angular/forms';
import { AdminService } from '../admin.service';
import { Admin } from '../admin';
import { Router } from '@angular/router';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
admin:Admin;

msg:string="";

  constructor(private builder:FormBuilder,private serv:AdminService,private router:Router) { 
    sessionStorage.clear();
  }

  ngOnInit(): void {
    this.serv.getadmin(1).subscribe(data=>{
      this.admin=data;
   }); 
  }

  adminform=this.builder.group({
    username:this.builder.control('',Validators.required),
    adminpassword:this.builder.control('',Validators.required)
  });

  adminsubmit()
  {
   
    if(this.adminform.controls.username.value==this.admin.username && this.adminform.controls.adminpassword.value==this.admin.adminpassword)
    {
      sessionStorage.setItem('admindata',this.adminform.controls.username.value);
      this.router.navigate(['addproduct']);
    }
    else{
      this.msg="Please enter the correct username or password";
    }

  }
}
