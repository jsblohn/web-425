/*
============================================
; Title:  app.module.ts
; Author: Professor Krasso
; Date:   16 July 2020
; Modified By: Janet Blohn
; Description: Exercise 2.2 - Navigation
; Root module for my-app app
============================================
*/

/* Import required modules from Angular */
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

/* Import the routing module */
import { AppRoutingModule } from './app-routing.module';

/* Import the Components that will be navigated to */
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
