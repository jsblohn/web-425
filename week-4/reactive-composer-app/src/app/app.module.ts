/*
============================================
; Title:  app.module.ts
; Author: Professor Krasso
; Date:   30 July 2020
; Modified By: Janet Blohn
; Description: Exercise 4.3 – Handling Form Events with Observables
; Root module for reactive-composer-app
============================================
*/

/* Import required modules from Angular */
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

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
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  /* Load the top level component for this app */
  bootstrap: [AppComponent]
})

/* Export as AppModule */
export class AppModule { }
