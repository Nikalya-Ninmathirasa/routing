import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { AboutCompanyComponent } from './about-company/about-company.component';
import { AboutCustomerComponent } from './about-customer/about-customer.component';
import { ErrorPageComponent } from './error-page/error-page.component';

const routes: Routes = [
  {component:HomeComponent,path:''},
  {component:ContactComponent,path:'contact'},
  {component:AboutComponent,
    path:'about',
    children:[
      {component:AboutCompanyComponent,path:'organisation'},
      {component:AboutCustomerComponent,path:'customer'}
    ]
  },
  {component:ErrorPageComponent,pathMatch:'full', path:'**'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
