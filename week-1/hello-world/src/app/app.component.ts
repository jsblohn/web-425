/*
============================================
; Title:  app.component.ts
; Author: Professor Krasso
; Date:   08 July 2020
; Modified By: Janet Blohn
; Description: Exercise 1.3 - Angular CLI
; Component for app.module.ts for hello-world app
============================================
*/
import { Component } from '@angular/core';

/* Tell Angular to insert an instance of this component wherever the app-root tag is found in the template HTML and give URLs for HTML and CSS files */
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

/* Define the myWorld variable and assign it a value, also export this component as AppComponent */
export class AppComponent {
  myWorld = "You are now in Janet's world!";
}
