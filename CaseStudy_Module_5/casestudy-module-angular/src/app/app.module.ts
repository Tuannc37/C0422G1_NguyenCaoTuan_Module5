import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FacilityComponent } from './facility/facility.component';
import { HomeComponent } from './local-web/home/home.component';
import { NavComponent } from './local-web/nav/nav.component';
import { FooterComponent } from './local-web/footer/footer.component';
import { CustomerComponent } from './customer/customer.component';
import { ContractComponent } from './contract/contract.component';
import { EmployeeComponent } from './employee/employee.component';

@NgModule({
  declarations: [
    AppComponent,
    FacilityComponent,
    HomeComponent,
    NavComponent,
    FooterComponent,
    CustomerComponent,
    ContractComponent,
    EmployeeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
