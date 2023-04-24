import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { FormBuilder,Validators } from '@angular/forms';
import { User } from '../user';
import { Router } from '@angular/router';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
user:User[];
username:string="";
userpassword:string="";
msg:string="";
  constructor(private serv:UserService,private builder:FormBuilder,private router:Router) { 
    sessionStorage.clear();
  }

  ngOnInit(): void {
    this.serv.getallusers().subscribe(data=>{
this.user=data;
    });
  }

  userform=this.builder.group({
    username:this.builder.control('',Validators.required),
    userpassword:this.builder.control('',Validators.required)
  });

  buttonclick()
  {
    
    var chk=false;
    for(let i=0;i<this.user.length;i++)
    {
      if(this.user[i].username==this.username && this.user[i].userpassword==this.userpassword)
      {
        sessionStorage.setItem('userdata',this.username);
        sessionStorage.setItem('userid',this.user[i].id.toString());
       
        this.router.navigate(['userviewproduct']);
        chk=true;
      }
    }
    if(chk==false)
    {
      this.msg="please enter the correct user";
    }
    
  }

  


}
