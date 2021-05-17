import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { EmployComponent } from './employ/employ.component';
import { CustomerComponent } from './customer/customer.component';

import { FormsModule } from '@angular/forms';
import { MenuComponent } from './menu/menu.component';
import { LoginComponent } from './login/login.component';
import { RouterModule, Routes } from '@angular/router';
import { EmploysearchComponent } from './employsearch/employsearch.component';
import { CustomerSearchComponent } from './customer-search/customer-search.component';
const appRoutes : Routes = [
  {path:'',component:LoginComponent},
  {path:'menu',component:MenuComponent,
  children : [
    {path:'user',component:UserComponent,outlet:'data'},
  {path:'employ',component:EmployComponent,outlet:'data'},
  {path:'employsearch',component:EmploysearchComponent,outlet:'data'},
  {path:'customer',component:CustomerComponent,outlet:'data'},
  {path:'customersearch',component:CustomerSearchComponent,outlet:'data'},
  ]
  }
]
@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    EmployComponent,
    CustomerComponent,
    EmploysearchComponent,
    MenuComponent,
    LoginComponent,
    CustomerSearchComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
