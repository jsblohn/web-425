/*
============================================
; Title:  app.module.ts
; Author: Professor Krasso
; Date:   08 July 2020
; Modified By: Janet Blohn
; Description: Exercise 1.3 - Angular CLI
; Root module for hello-world app
============================================
*/

/* Import required modules from Angular */
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

/* Import the AppComponent component */
import { AppComponent } from './app.component';

/* Define this as the root module with the @NgModule decorator, declare AppComponent to be included in this module, import the BrowserModule to define this as a web application, load AppComponent on start-up with the bootstrap property, and export this module as AppModule */
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
