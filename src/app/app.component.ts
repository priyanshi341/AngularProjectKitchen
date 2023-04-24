import { Component } from '@angular/core';
import { DoCheck } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements DoCheck{
  isnavbar:boolean=false;
  isnavbar1:boolean=false;
  isnavbar2:boolean=false;
  title = 'project2OfAngular';
constructor(private router:Router){}

  ngDoCheck(): void {
    let currenturl=this.router.url;
      if(currenturl=="/" ||currenturl=="/admin" || currenturl=="/user")
      {
        this.isnavbar=true;
        this.isnavbar1=false;
        this.isnavbar2=false;
      }
      else if(currenturl=="/adminviewproduct" ||currenturl=="/addproduct" || currenturl=="/adminupdate" 
      ||currenturl.match("/updateproduct")){
        this.isnavbar=false;
        this.isnavbar1=true;
        this.isnavbar2=false;
      }
      else if(currenturl=="/userviewproduct" ||currenturl=="/order" || currenturl=="/orderresult")
      {
        this.isnavbar=false;
        this.isnavbar1=false;
        this.isnavbar2=true;
      }
      else{
        this.isnavbar=false;
        this.isnavbar1=false;
        this.isnavbar2=false;
      }
    
  }
}
