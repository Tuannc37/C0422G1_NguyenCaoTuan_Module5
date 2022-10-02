import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FacilityListComponent } from './furama/facility/facility-list/facility-list.component';
import { HomeComponent } from './local-web/home/home.component';
import { NavComponent } from './local-web/nav/nav.component';
import { FooterComponent } from './local-web/footer/footer.component';
import { CustomerListComponent } from './furama/customer/customer-list/customer-list.component';
import { ContractListComponent } from './furama/contract/contract-list/contract-list.component';
import { EmployeeListComponent } from './furama/employee/employee-list/employee-list.component';
import { CustomerCreateComponent } from './furama/customer/customer-create/customer-create.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { BodyComponent } from './local-web/body/body.component';
import { CustomerUpdateComponent } from './furama/customer/customer-update/customer-update.component';
import { FacilityCreateComponent } from './furama/facility/facility-create/facility-create.component';


@NgModule({
  declarations: [
    AppComponent,
    FacilityListComponent,
    HomeComponent,
    NavComponent,
    FooterComponent,
    CustomerListComponent,
    ContractListComponent,
    EmployeeListComponent,
    CustomerCreateComponent,
    BodyComponent,
    CustomerUpdateComponent,
    FacilityCreateComponent,

  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
