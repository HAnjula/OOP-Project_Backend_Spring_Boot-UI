import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {SignUpUserComponent} from "./components/sign-up-user/sign-up-user.component";
import {LogInUserComponent} from "./components/log-in-user/log-in-user.component";
import {HomeComponent} from "./components/home/home.component";
import { AuthGuard } from './Guards/auth.guard';  // Import the AuthGuard

const routes: Routes = [
  {path:'',redirectTo:'/signup',pathMatch:'full'},
  {path:'signup',component:SignUpUserComponent},
  {path:'login',component:LogInUserComponent},
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
