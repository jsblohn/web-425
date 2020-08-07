/*
============================================
; Title:  app.component.ts
; Author: Professor Krasso
; Date:   07 August 2020
; Modified By: Janet Blohn
; Description: Exercise 5.3 - Data Tables
; Component for app.module.ts for in-n-out-booksp2 app
============================================
*/

/* Import required module from Angular */
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

/* Export this as AppComponent and define the assignment name for the HTML to pull in. */
export class AppComponent {

  assignment: string;

  // Output the Assignment Name on the page.
  constructor() {
    this.assignment = "Exercise 5.3 - Data Tables";
  }
}
