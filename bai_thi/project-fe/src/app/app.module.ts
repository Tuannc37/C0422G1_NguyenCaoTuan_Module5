import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './local-web/nav-bar/nav-bar.component';
import { FooterComponent } from './local-web/footer/footer.component';
import { BodyComponent } from './local-web/body/body.component';
import { HomeComponent } from './local-web/home/home.component';
import { CustomerComponent } from './angular-test/customer/customer-list/customer.component';
import { CustomerCreateComponent } from './angular-test/customer/customer-create/customer-create.component';
import { CustomerUpdateComponent } from './angular-test/customer/customer-update/customer-update.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgxPaginationModule} from 'ngx-pagination';


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    FooterComponent,
    BodyComponent,
    HomeComponent,
    CustomerComponent,
    CustomerCreateComponent,
    CustomerUpdateComponent,

  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
