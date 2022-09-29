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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
