import { NgModule }             from '@angular/core';
import { RouterModule, Routes, CanActivate } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NeedAuthGuard } from '../auth-guard';

import { HomeComponent } from '../home/home.component';
import { LoginComponent } from '../login/login.component';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { ItempageComponent } from '../itempage/itempage.component';
import { RegisterComponent } from '../register/register.component';


const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  //{ path: 'dashboard', component: DashboardComponent },
  { path: 'home', component: HomeComponent, data: { routeIdx: 0 } },
  { path: 'login', component: LoginComponent, data: { routeIdx: 1 } },
  { path: 'register', component: RegisterComponent, data: { routeIdx: 2 } },
  { path: 'dashboard', component: DashboardComponent, data: { routeIdx: 3 }, canActivate: [ NeedAuthGuard ] },
  { path: 'itempage', component: ItempageComponent, data: { routeIdx: 4 } },
  //{ path: '**', component: HomeComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    BrowserAnimationsModule,
    //NeedAuthGuard
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
