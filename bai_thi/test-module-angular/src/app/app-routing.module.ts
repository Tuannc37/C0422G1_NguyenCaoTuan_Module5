import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from "./local-web/home/home.component";
import {CustomerComponent} from "./angular-test/customer/customer-list/customer.component";
import {CustomerCreateComponent} from "./angular-test/customer/customer-create/customer-create.component";
import {CustomerUpdateComponent} from "./angular-test/customer/customer-update/customer-update.component";

const routes: Routes = [
  {path: '', component: HomeComponent},

  {path: 'customer', component: CustomerComponent},
  {path: 'customer/create', component: CustomerCreateComponent},
  {path: 'customer/update/:id', component: CustomerUpdateComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
