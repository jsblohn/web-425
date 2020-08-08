/*
============================================
; Title:  book-list.component.ts
; Author: Professor Krasso
; Date:   07 August 2020
; Modified By: Janet Blohn
; Description: Assignment 5.4 - Dialogs
; TypeScript for book-list.component.ts for in-n-out-booksp3 app
============================================
*/

/* Import required modules from Angular */
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

/* Reactive Extensions for JavaScript modules. */
import { Observable } from 'rxjs';

/* Import Application Modules and Components */
import {BooksService } from '../books.service';
import { IBook } from '../book.interface';
import { BookDetailsDialogComponent } from '../book-details-dialog/book-details-dialog.component';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})

// Export as BookListComponent and implement at initialization.
export class BookListComponent implements OnInit {

  // Create an Observable Array of books as IBook, a header containing and array of book values, and a book variable of type IBook.
  books: Observable<IBook[]>;
  header: Array<string> = ['isbn', 'title', 'numOfPages', 'authors']
  book: IBook;

  constructor(private booksService: BooksService, private dialog: MatDialog) {
    this.books = booksService.getBooks();
   }

  ngOnInit(): void {
  }

  showBookDetails(isbn: string) {
    this.book = this.booksService.getBook(isbn);

    const dialogRef = this.dialog.open(BookDetailsDialogComponent, {
      data: {
        book: this.book
      },
      disableClose: true,
      width: '800px'
    })

    console.log(this.book);

    dialogRef.afterClosed().subscribe(result => {
      if (result === 'confirm')
      {this.book = null;}
    });
  }
}
