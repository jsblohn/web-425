/*
============================================
; Title:  contact.component.ts
; Author: Professor Krasso
; Date:   25 August 2020
; Modified By: Janet Blohn
; Description: Assignment 8.2 – Server-side Communications
; TypeScript for contact.component.ts for in-n-out-books app
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
