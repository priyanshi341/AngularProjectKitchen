import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { AdminService } from './admin.service';
@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {
  urlmap:string="";
  constructor(private router:Router,private adminserv:AdminService){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if(this.adminserv.checkadmindetail()==true)
    {
      this.urlmap=route.url[0].path;
      if(this.urlmap=="adminviewproduct" || this.urlmap=="addproduct" || this.urlmap=="adminupdate" || this.urlmap.match("/updateproduct") )
      {

        return true;
      }
    }
    else{
  this.router.navigate(['/admin']);
  return false;
    }
    return false;
  }
  
}
