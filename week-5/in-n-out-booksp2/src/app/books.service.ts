/*
============================================
; Title:  book.service.ts
; Author: Professor Krasso
; Date:   07 August 2020
; Modified By: Janet Blohn
; Description: Exercise 5.3 - Data Tables
; Book Service for in-n-out-booksp2 app
============================================
*/

/* Import required module from Angular */
import { Injectable } from '@angular/core';

/* Reactive Extensions for JavaScript modules. */
import { Observable } from 'rxjs';
import { of } from 'rxjs';
import { map } from 'rxjs/operators';

/* Import Application Modules and Components */
import { IBook } from './book.interface';
import { fromEventPattern } from 'rxjs';


@Injectable({
  providedIn: 'root'
})

// Export as BookService, create an Array of books as IBook
export class BooksService {
  books: Array<IBook>;

  constructor() {
    this.books = [
      { // Create 5 new books.
        isbn: '9780446310789',
        title: 'To Kill a Mockingbird',
        description: 'A novel about a white lawyer (Atticus Finch) and his two children (Jem and Scout) in an Alabama town during the early 30’s. It is told from the viewpoint of Atticus Finch’s daughter, Scout’s point of view and centers around her father defending a black man who was wrongly accused and convicted of raping a white woman.  It deals with Scout becoming aware of the racism in the south during that timeframe, and that an innocent man can be convicted based on his color.',
        numOfPages: 384,
        authors: ['Harper Lee']
      },
      {
        isbn: '9780062409867',
        title: 'Go Set a Watchman',
        description: 'The prequel to <i>To Kill a Mockingbird</i>. It is about the same characters 20 years later. Scout returns home, bringing back memories of the racism that exists in her hometown.',
        numOfPages: 288,
        authors: ['Harper Lee']
      },
      {
        isbn: '9780142407332',
        title: 'The Outsiders',
        description: 'The story of Ponyboy, his brothers Sodapop and Darry growing up on the poor side of town. An evil gang called the "Socs" enjoy beating up the "greasers", which is what Ponyboy and his group are considered.',
        numOfPages: 224,
        authors: ['S. E. Hinton']
      },
      {
        isbn: '9780670016907',
        title: 'The Grapes of Wrath',
        description: 'An epic about an Oklahoma farm family who is part of the Dust Bowl migration during the Great Depression of the 1930s. They are forced to travel west to California after being driven from their homestead. It follows their journey west, and the not-so promised land.',
        numOfPages: 496,
        authors: ['John Steinbeck']
      },
      {
        isbn: '9780140177398',
        title: 'Of Mice and Men',
        description: 'The tale of two men traveling and working together in California\'s vegetable fields. George watches over Lennie, who is mentally challenged. This eventually leads to trouble for the two.',
        numOfPages: 112,
        authors: ['John Steinbeck']
      }
    ]
  }

  // Put the books into an Observable Array and return it.
  getBooks(): Observable<IBook[]> {
    return of(this.books);
  }

  // Get a book matching the isbn passed into it.
  getBook(isbn: string): IBook {
    for (let book of this.books) {
      if (book.isbn === isbn) {
        return book;
      }
    }
  }
}
