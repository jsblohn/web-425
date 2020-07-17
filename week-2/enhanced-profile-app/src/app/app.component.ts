/*
============================================
; Title:  app.component.ts
; Author: Professor Krasso
; Date:   16 July 2020
; Modified By: Janet Blohn
; Description: Assignment 2.3 - Data Binding
; Component for app.module.ts for enhanced-profile-app app
============================================
*/
/* Import required module from Angular */
import { Component } from '@angular/core';

/* Tell Angular to insert an instance of this component wherever the app-root tag is found in the template HTML and give URLs for HTML and CSS files */
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

/* Export this as AppComponent, define it as LoggedIn, and define the assignment name for the HTML to pull in. */
export class AppComponent {
  isLoggedIn: Boolean = true;
  assignment: string = "Exercise 2.3 - Data Binding"
}
