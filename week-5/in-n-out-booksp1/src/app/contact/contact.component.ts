/*
============================================
; Title:  contact.component.ts
; Author: Professor Krasso
; Date:   06 August 2020
; Modified By: Janet Blohn
; Description: Exercise 5.2 – Navigation and Layouts
; TypeScript for contact.component.ts for in-n-out-booksp1 app
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
