/*
============================================
; Title:  composer-list.component.ts
; Author: Professor Krasso
; Date:   17 July 2020
; Modified By: Janet Blohn
; Description: Assignment 2.4 - Routing in Action
; Component for composer-list in composer-app
============================================
*/

/* Import required module from Angular */
import { Component, OnInit } from '@angular/core';

/* Create and export a new TypeScript class called Composer */
export default class Composer {
  fullName: string;
  genre: string;

  /* Define the constructor with Component requirements */
  constructor (fullName: string, genre: string) {
    this.fullName = fullName;
    this.genre = genre;
  }
}

@Component({
  selector: 'app-composer-list',
  templateUrl: './composer-list.component.html',
  styleUrls: ['./composer-list.component.css']
})

/* Export as ComposerListComponent, create an Array of composers */
export class ComposerListComponent implements OnInit {
  composers: Array<Composer>;

  constructor() {
    this.composers = [
      new Composer("Johann Strauss II", "Classical"),
      new Composer("Johann Strauss I", "Classical"),
      new Composer("Pyotr Tchaikovsky", "Classical"),
      new Composer("Ludwig van Beethoven", "Classical"),
      new Composer("Johannes Brahms", "Classical")
    ]
   }

  ngOnInit(): void {
  }

}
