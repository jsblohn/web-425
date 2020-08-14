/*
============================================
; Title:  base-layout.component.ts
; Author: Professor Krasso
; Date:   13 August 2020
; Modified By: Janet Blohn
; Description: Assignment 6.4 - Input Properties
; TypeScript for base-layout.component of gpa-calculator-app2
============================================
*/

/* Import required modules from Angular */
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-base-layout',
  templateUrl: './base-layout.component.html',
  styleUrls: ['./base-layout.component.css']
})

// Export as BaseLayoutComponent and define the assignment name for the HTML to pull in.
export class BaseLayoutComponent implements OnInit {

  assignment : string;

  // Define the assignment name
  constructor() {
    this.assignment = "Assignment 6.4 - Input Properties";
   }

  ngOnInit(): void {
  }
}
