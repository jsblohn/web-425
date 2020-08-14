/*
============================================
; Title:  gpa.component.ts
; Author: Professor Krasso
; Date:   14 August 2020
; Modified By: Janet Blohn
; Description: Assignment 6.4 - Input Properties
; TypeScript for gpa.component of gpa-calculator-app2
============================================
*/

/* Import required modules from Angular */
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-gpa',
  templateUrl: './gpa.component.html',
  styleUrls: ['./gpa.component.css']
})

// Export as GpaComponent
export class GpaComponent implements OnInit {

  @Input() gpaTotal: number;

  constructor() { }

  ngOnInit(): void {
  }

}
