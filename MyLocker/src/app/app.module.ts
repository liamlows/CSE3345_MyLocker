import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { LoginModule } from './login/login.module';
import { HomeModule } from './home/home.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { ItempageModule } from './itempage/itempage.module';
import { RegisterModule } from './register/register.module';

import { NeedAuthGuard } from './models/auth-guard';
import { AppRoutingModule } from './app-routing/app-routing.module';

import { AppComponent } from './app.component';
import { CollapseComponent } from './collapse/collapse.component';
import { BrowserAnimationsModule } from '../../node_modules/@angular/platform-browser/animations';
import { FavoritesComponent } from './collapse/favorites/favorites.component';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
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
    FavoritesComponent
  ],
  providers: [
    NeedAuthGuard
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
