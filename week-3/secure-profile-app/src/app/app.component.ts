/*
============================================
; Title:  app.component.ts
; Author: Professor Krasso
; Date:   23 July 2020
; Modified By: Janet Blohn
; Description: Exercise 3.3 - Passing Data to Routes, Part 2
; Component for app.module.ts for secure-profile-app app
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

/* Export this as AppComponent and create a title for the HTML to pull in. */
export class AppComponent {
  title: "Secure Profile App";
}
