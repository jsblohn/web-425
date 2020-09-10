/*
============================================
; Title:  app-routing.module.ts
; Author: Professor Krasso
; Date:   28 August 2020
; Modified By: Janet Blohn
; Description: Bob's Computer Repair Application
; Routing module for bobs-computer-repair
============================================
*/

// Import required modules from Angular
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Import the components that will be navigated to
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'home',
    component: HomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
