import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { NeedAuthGuard } from './auth-guard';
import { LoginModule } from './login/login.module';
import { HomeModule } from './home/home.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { ItempageModule } from './itempage/itempage.module';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
//import { ItempageComponent } from './itempage/itempage.component';
// import { DashboardComponent } from './dashboard/dashboard.component';
//import { HomeComponent }      from './home/home.component';
//import { LoginComponent }    from './login/login.component';


@NgModule({
  declarations: [
    AppComponent,
    //ItempageComponent,
    //DashboardComponent,
    //HomeComponent,
    //LoginComponent
  ],
  imports: [
    BrowserModule,
    LoginModule,
    HomeModule,
    DashboardModule,
    ItempageModule
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [ NeedAuthGuard ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
