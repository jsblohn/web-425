/*
============================================
; Title:  book-details-dialog.component.ts
; Author: Professor Krasso
; Date:   25 August 2020
; Modified By: Janet Blohn
; Description: Assignment 8.2 – Server-side Communications
; Typescript for book-details-component in-n-out-books app
============================================
*/

/* Import required modules from Angular */
import { Component, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Inject } from '@angular/core';

/* Import Application Modules and Components */
import { IBook } from '../book.interface';

@Component({
  selector: 'app-book-details-dialog',
  templateUrl: './book-details-dialog.component.html',
  styleUrls: ['./book-details-dialog.component.scss']
})
export class BookDetailsDialogComponent implements OnInit {
  // Add variable book with type of IBook
  book: IBook;

  constructor(private dialogRef: MatDialogRef<BookDetailsDialogComponent>, @Inject(MAT_DIALOG_DATA) data) {
    this.book = data.book;
  }

  ngOnInit(): void {
  }

}
