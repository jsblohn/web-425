/*
============================================
; Title:  app.component.ts
; Author: Professor Krasso
; Date:   22 July 2020
; Modified By: Janet Blohn
; Description: Exercise 3.2 - Passing Data to Routes, Part 1
; Component for app.module.ts for enhanced-composer-app
============================================
*/

/* Import required module from Angular */
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

/* Export this as AppComponent and define the assignment name for the HTML to pull in. */
export class AppComponent {
  assignment: string = "Exercise 3.2 - Passing Data to Routes, Part 1";
}
