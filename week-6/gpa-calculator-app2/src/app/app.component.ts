/*
============================================
; Title:  app.component.ts
; Author: Professor Krasso
; Date:   13 August 2020
; Modified By: Janet Blohn
; Description: Assignment 6.4 - Input Properties
; TypeScript for app.component of gpa-calculator-app2
============================================
*/

/* Import required module from Angular */
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

// Export as AppComponent
export class AppComponent {
  title = 'gpa-calculator-app2';
}
