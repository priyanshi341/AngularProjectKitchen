import { Component, OnInit } from '@angular/core';
import { FormBuilder,Validators } from '@angular/forms';
import { AdminService } from '../admin.service';
@Component({
  selector: 'app-updateadmin',
  templateUrl: './updateadmin.component.html',
  styleUrls: ['./updateadmin.component.css']
})
export class UpdateadminComponent implements OnInit {
msg:string="";
class:string="";
username:string="";
password:string="";
  constructor(private builder:FormBuilder,private serv:AdminService) { }

  ngOnInit(): void {
    
  }

  adminform=this.builder.group({
    username:this.builder.control('',Validators.required),
    adminpassword:this.builder.control('',Validators.required)
  });

  updatesubmit()
  {
  if(this.username=="" || this.password=="")
  {
    this.class="myclass1"
    this.msg="enter the username and password";
  }
  else{
    this.serv.updateadmin(1,this.adminform.value).subscribe(data=>{
      this.class="myclass2"
      this.msg="password updated successfully";
    });
  }
  }
}
