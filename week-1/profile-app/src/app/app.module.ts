/*
============================================
; Title:  app.module.ts
; Author: Professor Krasso
; Date:   09 July 2020
; Modified By: Janet Blohn
; Description: Description: Assignment 1.5 - Components
; Root module for profile-app app
============================================
*/
/* Import required modules from Angular */
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

/* Import the required components */
import { AppComponent } from './app.component';
import { MyImageComponent } from './my-image/my-image.component';
import { MyDetailsComponent } from './my-details/my-details.component';

/* Define this as the root module with the @NgModule decorator, declare AppComponent, MyImageComponent, and MyDetailsComponent to be included in this module, import the BrowserModule to define this as a web application, load AppComponent on start-up with the bootstrap property, and export this module as AppModule */
@NgModule({
  declarations: [
    AppComponent,
    MyImageComponent,
    MyDetailsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
