import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { NeedAuthGuard } from './auth-guard';
import { LoginModule } from './login/login.module';
import { HomeModule } from './home/home.module'

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
//import { HomeComponent }      from './home/home.component';
//import { LoginComponent }    from './login/login.component';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    //HomeComponent,
    //LoginComponent
  ],
  imports: [
    BrowserModule,
    LoginModule,
    HomeModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [ NeedAuthGuard ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
