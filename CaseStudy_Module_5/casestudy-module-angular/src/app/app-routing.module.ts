import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {CustomerCreateComponent} from "./furama/customer/customer-create/customer-create.component";
import {CustomerListComponent} from "./furama/customer/customer-list/customer-list.component";
import {FacilityListComponent} from "./furama/facility/facility-list/facility-list.component";
import {ContractListComponent} from "./furama/contract/contract-list/contract-list.component";
import {EmployeeListComponent} from "./furama/employee/employee-list/employee-list.component";
import {HomeComponent} from "./local-web/home/home.component";
import {CustomerUpdateComponent} from "./furama/customer/customer-update/customer-update.component";
import {FacilityCreateComponent} from "./furama/facility/facility-create/facility-create.component";


const routes: Routes = [
  {path: '', component: HomeComponent},

  {path: 'customer', component: CustomerListComponent},
  {path: 'customer/create', component: CustomerCreateComponent},
  {path: 'customer/update/:id', component: CustomerUpdateComponent},

  {path: 'facility', component: FacilityListComponent},
  {path: 'facility/create', component: FacilityCreateComponent},

  {path: 'contract', component: ContractListComponent},

  {path: 'employee', component: EmployeeListComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
