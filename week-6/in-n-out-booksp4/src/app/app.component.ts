/*
============================================
; Title:  app.component.ts
; Author: Professor Krasso
; Date:   12 August 2020
; Modified By: Janet Blohn
; Description: Exercise 6.2 - Input/Output Properties, Part 1
; Component for app.module.ts for in-n-out-booksp4 app
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
    this.assignment = "Exercise 6.2 - Input/Output Properties, Part 1 ";
  }
}
