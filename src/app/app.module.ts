import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddproductComponent } from './addproduct/addproduct.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ViewallproductbyadminComponent } from './viewallproductbyadmin/viewallproductbyadmin.component';
import { ViewallproductbyuserComponent } from './viewallproductbyuser/viewallproductbyuser.component';
import { UserComponent } from './user/user.component';
import { OrdersComponent } from './orders/orders.component';
import { OrderresultComponent } from './orderresult/orderresult.component';
import{Ng2SearchPipeModule} from 'ng2-search-filter';
import { AdminComponent } from './admin/admin.component';
import { UpdateadminComponent } from './updateadmin/updateadmin.component';
import { UpdateproductComponent } from './updateproduct/updateproduct.component';
@NgModule({
  declarations: [
    AppComponent,
    AddproductComponent,
    ViewallproductbyadminComponent,
    ViewallproductbyuserComponent,
    UserComponent,
    OrdersComponent,
    OrderresultComponent,
    AdminComponent,
    UpdateadminComponent,
    UpdateproductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgbModule,
    Ng2SearchPipeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
