/*
============================================
; Title:  app.component.ts
; Author: Professor Krasso
; Date:   09 July 2020
; Modified By: Janet Blohn
; Description: Assignment 1.5 - Components
; Component for app.module.ts for profile-app app
============================================
*/
import { Component } from '@angular/core';

/* Tell Angular to insert an instance of this component wherever the app-root tag is found in the template HTML and give URLs for HTML and CSS files */
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  assignment: string = "Assignment 1.5 - Components"
}
