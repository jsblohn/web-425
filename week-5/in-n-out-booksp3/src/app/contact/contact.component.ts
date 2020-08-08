/*
============================================
; Title:  contact.component.ts
; Author: Professor Krasso
; Date:   07 August 2020
; Modified By: Janet Blohn
; Description: Assignment 5.4 - Dialogs
; TypeScript for contact.component.ts for in-n-out-booksp3 app
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
