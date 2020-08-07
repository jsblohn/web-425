/*
============================================
; Title:  about.component.ts
; Author: Professor Krasso
; Date:   07 August 2020
; Modified By: Janet Blohn
; Description: Exercise 5.3 - Data Tables
; TypeScript for about.component for in-n-out-booksp2 app
============================================
*/

/* Import required module from Angular */
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})

// Export as AboutComponent and implement on initialization.
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
