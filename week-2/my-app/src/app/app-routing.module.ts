/*
============================================
; Title:  app-routing.module.ts
; Author: Professor Krasso
; Date:   16 July 2020
; Modified By: Janet Blohn
; Description: Exercise 2.2 - Navigation
; Routing module for my-app app
============================================
*/

/* Import required modules from Angular */
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/* Import the Components that will be navigated to */
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';

/* Tell Angular the Component to route to depending on URL chosen */
const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  },
  {
    path: 'about',
    component: AboutComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
