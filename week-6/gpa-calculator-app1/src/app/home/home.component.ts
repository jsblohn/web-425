/*
============================================
; Title:  home.component.ts
; Author: Professor Krasso
; Date:   13 August 2020
; Modified By: Janet Blohn
; Description: Exercise 6.3 – Layouts
; Typescript for home.component. ts of gpa-calculator-app1
============================================
*/

/* Import required modules from Angular */
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

// Export as the HomeComponent
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
