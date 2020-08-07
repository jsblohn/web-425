/*
============================================
; Title:  book.interface.ts
; Author: Professor Krasso
; Date:   07 August 2020
; Modified By: Janet Blohn
; Description: Exercise 5.3 - Data Tables
; Book Interface for in-n-out-booksp2 app
============================================
*/

export interface IBook {
  isbn: string;
  title: string;
  authors: Array<string>;
  description: string;
  numOfPages: number
}
