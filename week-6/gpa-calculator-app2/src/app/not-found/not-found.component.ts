/*
============================================
; Title:  not-found.component.ts
; Author: Professor Krasso
; Date:   13 August 2020
; Modified By: Janet Blohn
; Description: Assignment 6.4 - Input Properties
; Typescript for not-found.component. ts of gpa-calculator-app2
============================================
*/

/* Import required modules from Angular */
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.css']
})

// Export as NotFoundComponent
export class NotFoundComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
