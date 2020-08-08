/*
============================================
; Title:  about.component.ts
; Author: Professor Krasso
; Date:   07 August 2020
; Modified By: Janet Blohn
; Description: Assignment 5.4 - Dialogs
; TypeScript for about.component for in-n-out-booksp3 app
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
