/*
============================================
; Title:  app.component.ts
; Author: Professor Krasso
; Date:   25 August 2020
; Modified By: Janet Blohn
; Description: Assignment 8.2 – Server-side Communications
; TypeScript for app.component.ts for in-n-out-books app
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
    this.assignment = "Welcome to In-N-Out-Books ";
  }
}
