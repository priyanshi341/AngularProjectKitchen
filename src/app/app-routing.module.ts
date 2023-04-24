import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddproductComponent } from './addproduct/addproduct.component';
import { ViewallproductbyadminComponent } from './viewallproductbyadmin/viewallproductbyadmin.component';
import { UserComponent } from './user/user.component';
import { ViewallproductbyuserComponent } from './viewallproductbyuser/viewallproductbyuser.component';
import { OrdersComponent } from './orders/orders.component';
import { OrderresultComponent } from './orderresult/orderresult.component';
import { AdminComponent } from './admin/admin.component';
import { UpdateadminComponent } from './updateadmin/updateadmin.component';
import { UpdateproductComponent } from './updateproduct/updateproduct.component';
import { AdminGuard } from './admin.guard';
import { UserGuard } from './user.guard';

const routes: Routes = [
  {path:"adminviewproduct",component:ViewallproductbyadminComponent,canActivate:[AdminGuard]},
  {path:"addproduct",component:AddproductComponent,canActivate:[AdminGuard]},
  {path:"user",component:UserComponent},
  {path:"userviewproduct",component:ViewallproductbyuserComponent,canActivate:[UserGuard]},
  {path:"order",component:OrdersComponent,canActivate:[UserGuard]},
  {path:"orderresult",component:OrderresultComponent,canActivate:[UserGuard]},
  {path:"admin",component:AdminComponent},
  {path:"adminupdate",component:UpdateadminComponent,canActivate:[AdminGuard]},
  {path:"updateproduct/:id",component:UpdateproductComponent}
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
