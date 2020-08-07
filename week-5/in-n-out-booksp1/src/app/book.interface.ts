/*
============================================
; Title:  book.interface.ts
; Author: Professor Krasso
; Date:   05 August 2020
; Modified By: Janet Blohn
; Description: Exercise 5.2 – Navigation and Layouts
; Book Interface for in-n-out-booksp1 app
============================================
*/

export interface IBook {
  isbn: string;
  title: string;
  authors: Array<string>;
  description: string;
  numOfPages: number
}
