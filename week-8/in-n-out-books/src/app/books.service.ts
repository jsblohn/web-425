/*
============================================
; Title:  book.service.ts
; Author: Professor Krasso
; Date:   25 August 2020
; Modified By: Janet Blohn
; Description: Assignment 8.2 – Server-side Communications
; Book Service for in-n-out-books app
============================================
*/

/* Import required module from Angular */
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

// Export as BookService, create an Array of books as IBook
export class BooksService {
  isbns: Array<string> = [
    "0345339681",
    "0261103571",
    "9780593099322",
    "9780261102361",
    "9780261102378",
    "9780590302715",
    "9780316769532",
    "9780743273565",
    "9780590405959"
  ]

  constructor(private http: HttpClient) { }

  // Put the books into an Observable Array and return it.
  getBooks() {

    // Create a variable for HttpParams
    let params = new HttpParams();

    // Define the params
    params = params.append('bibkeys', `ISBN:${this.isbns.join(',')}`);
    params = params.append('format', 'json');
    params = params.append('jscmd', 'details');

    // Return the http.get function with the openlibrary url and the params object
    return this.http.get('https://openlibrary.org/api/books', {params: params})
  }
}
