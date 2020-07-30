/*
============================================
; Title: IComposer.ts
; Author: Professor Krasso
; Date:   29 July 2020
; Modified By: Janet Blohn
; Description: Exercise 4.2 – Inversion of Control and Dependency Injection
; Interface for di-composer-app
============================================
*/

/* Export the Interface with 3 fields */
export interface IComposer {
  composerId: number;
  fullName: string;
  genre: string;
}
