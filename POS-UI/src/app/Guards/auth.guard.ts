import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean | Observable<boolean> | Promise<boolean> {
    const isLoggedIn = this.checkLogin();

    console.log('AuthGuard: canActivate called');
    console.log('AuthGuard: isLoggedIn =', isLoggedIn);

    if (!isLoggedIn) {
      console.log('AuthGuard: Navigation to /login');
      this.router.navigate(['/login']);
      return false;
    }

    return true;
  }

  checkLogin(): boolean {
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    console.log('AuthGuard: checkLogin called, isLoggedIn =', isLoggedIn);
    return isLoggedIn === 'true';
  }
}
