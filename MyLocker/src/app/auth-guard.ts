import {CanActivate, Router} from '@angular/router';
import {Injectable} from '@angular/core';
import {CustomerService} from './customer.service';
import {ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router/src/router_state';

@Injectable()
export class NeedAuthGuard implements CanActivate {

  constructor(private customerService: CustomerService, private router: Router) {
  }

  authIsLogged: boolean;

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {

    const redirectUrl = route['_routerState']['url'];

    if(this.customerService.isLogged()) {
      this.authIsLogged = true;
      return true;
    }
    else{
      this.authIsLogged = false;
      this.router.navigateByUrl(
        this.router.createUrlTree(
          ['/login'], {
            queryParams: {
              redirectUrl
            }
          }
        )
      );
      return false;
    }
  }
}
