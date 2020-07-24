/*
============================================
; Title:  composer-class.ts
; Author: Professor Krasso
; Date:   22 July 2020
; Modified By: Janet Blohn
; Description: Exercise 3.2 - Passing Data to Routes, Part 1
; Class for Composer Object
============================================
*/

/* Import IComposer from the composer interface (IComposer) */
import { IComposer } from './composer.interface';

/* Create and export a new TypeScript class called Composer */
export class Composer {
  composers: Array<IComposer>;

  /* Define the constructor and define the composers array with 5 composers */
  constructor () {
    this.composers = [
      {composerId: 100, fullName: "Johann Strauss II", genre: "Classical"},
      {composerId: 200, fullName: "Johann Strauss I", genre: "Classical"},
      {composerId: 300, fullName: "Pyotr Tchaikovsky", genre: "Classical"},
      {composerId: 400, fullName: "Ludwig van Beethoven", genre: "Classical"},
      {composerId: 500, fullName: "Johannes Brahms", genre: "Classical"},
    ]
  }

  /* Return the composer */
  getComposers() {
    return this.composers;
  }

  /* Find the composer by composerId and return it */
  getComposer(composerId: number) {
    for (let composer of this.composers) {
      if (composer.composerId === composerId) {
        return composer;
      }
    }
  }
}
