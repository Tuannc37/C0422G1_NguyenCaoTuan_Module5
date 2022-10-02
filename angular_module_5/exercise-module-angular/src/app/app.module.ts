import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ColorComponent } from './ss2-typescript/color/color.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { NavbarComponent } from './ss3-angular-template-exercise/navbar/navbar.component';
import { FooterComponent } from './ss3-angular-template-exercise/footer/footer.component';
import { TodoComponent } from './ss5-angular-form/todo/todo.component';
import { NameCardComponent } from './ss4-components-interaction/name-card/name-card.component';
import { ProgressBarComponent } from './ss4-components-interaction/progress-bar/progress-bar.component';
import { AngularRatingBarComponent } from './ss4-components-interaction/angular-rating-bar/angular-rating-bar.component';
import { CountdownTimerComponent } from './ss4-components-interaction/countdown-timer/countdown-timer.component';
import { AngularLoginFormComponent } from './ss5-angular-form/angular-login-form/angular-login-form.component';
import { AngularRegisrtationFormComponent } from './ss5-angular-form/angular-regisrtation-form/register/angular-regisrtation-form.component';
import { CountryComponent } from './ss5-angular-form/angular-regisrtation-form/country/country.component';
import { AngularTimelinesAppComponent } from './ss6-service-router/angular-timelines-app/angular-timelines-app.component';
import {AngularProductManagementComponent} from "./ss6-service-router/angular-song-management/angular-product-management.component";
import {YoutubePlayerComponent} from "./ss6-service-router/angular-song-management/youtube-player/youtube-player.component";
import {ProductListComponent} from "./ss6-service-router/angular-product-management/product/product-list/product-list.component";
import { ProductCreateComponent } from './ss6-service-router/angular-product-management/product/product-create/product-create.component';
import { DictionaryDetailComponent } from './ss6-service-router/dictionary/dictionary-detail/dictionary-detail.component';
import { DictionaryPageComponent } from './ss6-service-router/dictionary/dictionary-page/dictionary-page.component';
import { ProductUpdateComponent } from './ss6-service-router/angular-product-management/product/product-update/product-update.component';
import {HttpClientModule} from "@angular/common/http";
import { CategoryListComponent } from './ss7-back-end/angular-product/category/category-list/category-list.component';
import { CategoryCreateComponent } from './ss7-back-end/angular-product/category/category-create/category-create.component';
import { CategoryUpdateComponent } from './ss7-back-end/angular-product/category/category-update/category-update.component';
import { ProductListNewComponent } from './ss7-back-end/angular-product/product/product-list-new/product-list-new.component';
import { ProductUpdateNewComponent } from './ss7-back-end/angular-product/product/product-update-new/product-update-new.component';
import { ProductCreateNewComponent } from './ss7-back-end/angular-product/product/product-create-new/product-create-new.component';
import { TodoUpdateComponent } from './ss7-back-end/angular-name-card/todo-update/todo-update.component';
import { TodoNewComponent } from './ss7-back-end/angular-name-card/todo-new/todo-new.component';

@NgModule({
  declarations: [
    AppComponent,
    ColorComponent,
    NavbarComponent,
    FooterComponent,
    TodoComponent,
    NameCardComponent,
    ProgressBarComponent,
    AngularRatingBarComponent,
    CountdownTimerComponent,
    AngularLoginFormComponent,
    AngularRegisrtationFormComponent,
    CountryComponent,
    AngularTimelinesAppComponent,
    AngularProductManagementComponent,
    YoutubePlayerComponent,
    ProductListComponent,
    ProductCreateComponent,
    DictionaryDetailComponent,
    DictionaryPageComponent,
    ProductUpdateComponent,
    CategoryListComponent,
    CategoryCreateComponent,
    CategoryUpdateComponent,
    ProductListNewComponent,
    ProductUpdateNewComponent,
    ProductCreateNewComponent,
    TodoUpdateComponent,
    TodoNewComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
