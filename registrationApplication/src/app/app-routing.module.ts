import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RequestAccessCopy3Component } from './request-access-copy3/request-access-copy3.component';
import { RequestAccessComponent } from './request-access/request-access.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  { path: "", component: RequestAccessComponent },
  { path: "signup", component: SignupComponent },
  { path: "thankyou", component: RequestAccessCopy3Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
