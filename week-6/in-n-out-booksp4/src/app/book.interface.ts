/*
============================================
; Title:  book.interface.ts
; Author: Professor Krasso
; Date:   12 August 2020
; Modified By: Janet Blohn
; Description: Exercise 6.2 - Input/Output Properties, Part 1
; Book Interface for in-n-out-booksp4 app
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
