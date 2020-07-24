/*
============================================
; Title:  app-routing.ts
; Author: Professor Krasso
; Date:   23 July 2020
; Modified By: Janet Blohn
; Description: Exercise 3.3 - Passing Data to Routes, Part 2
; TypeScript Routing file for secure-profile-app
============================================
*/

/* Import required modules from Angular */
import { Routes } from '@angular/router';

/* Import the SignInComponent and HomeComponent from secure-profile-app */
import { SignInComponent } from './sign-in/sign-in.component';
import { HomeComponent } from './home/home.component';

/* Export the routes for the sign-in and home components */
export const AppRoutes: Routes = [
  {
    path: '',
    component: SignInComponent
  },
  {
    path: 'home',
    component: HomeComponent
  }
]
