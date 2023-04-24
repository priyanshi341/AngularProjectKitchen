import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { UserService } from './user.service';
@Injectable({
  providedIn: 'root'
})
export class UserGuard implements CanActivate {
  urlmap:string="";
  constructor(private userserv:UserService,private router:Router)
  {

  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
  
if(this.userserv.checkuserdetail()==true)
{
   this.urlmap=route.url[0].path;
   if(this.urlmap=="userviewproduct" || this.urlmap=="order" || this.urlmap=="orderresult" )
   {
    return true;
   }
}
  else{
    this.router.navigate(['/user']);
    return false;
  }
  return false;
  }
  
}
