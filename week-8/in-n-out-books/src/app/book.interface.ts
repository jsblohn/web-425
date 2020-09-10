/*
============================================
; Title:  book.interface.ts
; Author: Professor Krasso
; Date:   25 August 2020
; Modified By: Janet Blohn
; Description: Assignment 8.2 – Server-side Communications
; Book Interface for in-n-out-books app
============================================
*/

/* Export as interface IBook with values and attributes defined */
export interface IBook {
  isbn: string;
  title: string;
  authors: Array<string>;
  description: string;
  numOfPages: number
}
