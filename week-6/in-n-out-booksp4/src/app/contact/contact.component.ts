/*
============================================
; Title:  contact.component.ts
; Author: Professor Krasso
; Date:   12 August 2020
; Modified By: Janet Blohn
; Description: Exercise 6.2 - Input/Output Properties, Part 1
; TypeScript for contact.component.ts for in-n-out-booksp4 app
============================================
*/

/* Import required module from Angular */
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})

// Export as ContactComponent and implement at initialization.
export class ContactComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
