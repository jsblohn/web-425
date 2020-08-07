/*
============================================
; Title:  book-list.component.ts
; Author: Professor Krasso
; Date:   06 August 2020
; Modified By: Janet Blohn
; Description: Exercise 5.2 – Navigation and Layouts
; TypeScript for book-list.component.ts for in-n-out-booksp1 app
============================================
*/

/* Import required module from Angular */
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})

// Export as BookListComponent and implement at initialization.
export class BookListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
