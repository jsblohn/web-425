/*
============================================
; Title:  app.module.ts
; Author: Professor Krasso
; Date:   23 July 2020
; Modified By: Janet Blohn
; Description: Exercise 3.2 - Passing Data to Routes, Part 1
; Root module for enhanced-composer-app
============================================
*/

/* Import required modules from Angular */
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

/* Import the components that will be navigated to */
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComposerListComponent } from './composer-list/composer-list.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { ComposerDetailsComponent } from './composer-details/composer-details.component';

@NgModule({
  /* Define the components that belong to this module */
  declarations: [
    AppComponent,
    ComposerListComponent,
    ContactComponent,
    AboutComponent,
    ComposerDetailsComponent
  ],

  /* Import the modules needed for the app */
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  /* Load the top level component for this app */
  bootstrap: [AppComponent]
})

/* Export as AppModule */
export class AppModule { }
