import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { LoginComponent } from './Components/login/login.component';
import { RegisterComponent } from './Components/register/register.component';
import { ForyoupageComponent } from './Components/foryoupage/foryoupage.component';

const routes: Routes = [
  {
    path:"login",
    component:LoginComponent,
    pathMatch:"full"
  },
  {
    path:"register",
    component:RegisterComponent,
    pathMatch:"full"
  },
  {
    path:'',
    component:HomeComponent,
    pathMatch:"full"
  },
  {
    path:'foryoupage',
    component:ForyoupageComponent,
    pathMatch:"full"
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
