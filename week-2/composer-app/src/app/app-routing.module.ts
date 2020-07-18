/*
============================================
; Title:  app-routing.module.ts
; Author: Professor Krasso
; Date:   17 July 2020
; Modified By: Janet Blohn
; Description: Assignment 2.4 - Routing in Action
; Routing module for composer-app
============================================
*/

/* Import required modules from Angular */
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/* Import the components that will be navigated to */
import { ComposerListComponent } from './composer-list/composer-list.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';

/* Define the routes to be routed to based on URL chosen */
const routes: Routes = [
  {
    path: '',
    component: ComposerListComponent
  },
  {
    path: 'composer-list',
    component: ComposerListComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  }

];

/* Import Angular's routing module for the root of the application, and export as the router module of this application */
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
