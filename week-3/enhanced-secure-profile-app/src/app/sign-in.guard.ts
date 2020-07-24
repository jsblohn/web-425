/*
============================================
; Title:  sign-in.guard.ts
; Author: Professor Krasso
; Date:   23 July 2020
; Modified By: Janet Blohn
; Description: Assignment 3.4 - Guarding Routes
; Sign in guard for enhanced-secure-profile-app
============================================
*/

// Import the required Angular modules
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
// Export as class SignInGuard
export class SignInGuard implements CanActivate {
  // Create a constructor with Router defined
  constructor (private router: Router) {}
  // If isLoggedIn is true, the route can be activated.
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      let isLoggedIn = next.queryParams.isLoggedIn;
      if (isLoggedIn) {
        return true;
    } else {
      this.router.navigate(['/']);
      return false;
    }
  }

}
