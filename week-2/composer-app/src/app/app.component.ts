/*
============================================
; Title:  app.component.ts
; Author: Professor Krasso
; Date:   17 July 2020
; Modified By: Janet Blohn
; Description: Assignment 2.4 - Routing in Action
; Component for app.module.ts for composer-app
============================================
*/
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

/* Export this as AppComponent and define the assignment name for the HTML to pull in. */
export class AppComponent {
  assignment: string = "Assignment 2.4 - Routing in Action";
}
