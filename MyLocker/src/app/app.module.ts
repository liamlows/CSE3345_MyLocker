import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { LoginModule } from './login/login.module';
import { HomeModule } from './home/home.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { ItempageModule } from './itempage/itempage.module';
import { RegisterModule } from './register/register.module';

import { NeedAuthGuard } from './auth-guard';
import { AppRoutingModule } from './app-routing/app-routing.module';

import { AppComponent } from './app.component';
import { CollapseComponent } from './collapse/collapse.component';
// import { SideNavComponent } from './ui/side-nav/side-nav.component';



@NgModule({
  imports: [
    BrowserModule,
    LoginModule,
    RegisterModule,
    HomeModule,
    DashboardModule,
    ItempageModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule
  ],
  declarations: [
    AppComponent,
    CollapseComponent,
    // SideNavComponent,
  ],
  providers: [
    NeedAuthGuard
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
