import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {SignUpUserComponent} from "./components/sign-up-user/sign-up-user.component";
import {LogInUserComponent} from "./components/log-in-user/log-in-user.component";

const routes: Routes = [
  {path:'',redirectTo:'/signup',pathMatch:'full'},
  {path:'signup',component:SignUpUserComponent},
  {path:'login',component:LogInUserComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
