/*
============================================
; Title:  app-routing.ts
; Author: Professor Krasso
; Date:   23 July 2020
; Modified By: Janet Blohn
; Description: Assignment 3.4 - Guarding Routes
; TypeScript Routing file for secure-profile-app
============================================
*/

/* Import required modules from Angular */
import { Routes } from '@angular/router';

/* Import the SignInComponent and HomeComponent from enhanced-secure-profile-app */
import { SignInComponent } from './sign-in/sign-in.component';
import { HomeComponent } from './home/home.component';
import { SignInGuard } from './sign-in.guard';

/* Export the routes for the sign-in and home components */
export const AppRoutes: Routes = [
  {
    path: '',
    component: SignInComponent
  },
  {
    path: 'home',
    canActivate: [SignInGuard],
    component: HomeComponent
  }
]
