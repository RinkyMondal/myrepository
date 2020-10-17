import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RequestAccessComponent } from './request-access/request-access.component';
import { SignupComponent } from './signup/signup.component';
import { NgxSpinnerModule } from "ngx-spinner";
import {HttpClientModule} from '@angular/common/http';
import { RequestAccessCopy3Component } from './request-access-copy3/request-access-copy3.component';

@NgModule({
  declarations: [
    AppComponent,
    RequestAccessComponent,
    SignupComponent,
    RequestAccessCopy3Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxSpinnerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
