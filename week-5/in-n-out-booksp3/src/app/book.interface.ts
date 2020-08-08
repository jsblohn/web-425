/*
============================================
; Title:  book.interface.ts
; Author: Professor Krasso
; Date:   07 August 2020
; Modified By: Janet Blohn
; Description: Assignment 5.4 - Dialogs
; Book Interface for in-n-out-booksp3 app
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
