/*
============================================
; Title:  app.component.ts
; Author: Professor Krasso
; Date:   29 July 2020
; Modified By: Janet Blohn
; Description: Exercise 4.2 – Inversion of Control and Dependency Injection
; Component for app.module.ts for di-composer-app
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
  assignment: string = "Exercise 4.2 – Inversion of Control and Dependency Injection";
}
