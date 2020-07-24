/*
============================================
; Title: contact.component.ts
; Author: Professor Krasso
; Date:   22 July 2020
; Modified By: Janet Blohn
; Description: Exercise 3.2 - Passing Data to Routes, Part 1
; TypeScript file for the contact component for enhanced-composer-app
============================================
*/

/* Import required Angular modules */
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})

/* Export as class ContactComponent and load on initialization */
export class ContactComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
