/*
============================================
; Title:  app-routing.module.ts
; Author: Professor Krasso
; Date:   05 August 2020
; Modified By: Janet Blohn
; Description: Exercise 5.2 – Navigation and Layouts
; Routing module for in-n-out-booksp1 app
============================================
*/

/* Import required modules from Angular */
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BookListComponent } from './book-list/book-list.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';

/* Define the routes to be routed to based on URL chosen */
const routes: Routes = [
  {
    path: '',
    component: BookListComponent
  },
  {
    path: 'book-list',
    component: BookListComponent
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

// Export as AppRoutingModule.
export class AppRoutingModule { }
