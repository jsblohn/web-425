/*
============================================
; Title:  composer-list.component.ts
; Author: Professor Krasso
; Date:   22 July 2020
; Modified By: Janet Blohn
; Description: Exercise 3.2  - Passing Data to Routes, Part 1
; Component for composer-list in composer-app
============================================
*/

/* Import required module from Angular */
import { Component, OnInit } from '@angular/core';

/* Import the composer interface and the composer class */
import { IComposer } from '../composer.interface';
import { Composer } from '../composer.class';

@Component({
  selector: 'app-composer-list',
  templateUrl: './composer-list.component.html',
  styleUrls: ['./composer-list.component.css']
})

/* Export as ComposerListComponent, create an Array of composers */
export class ComposerListComponent implements OnInit {
  composers: Array<IComposer>;

  /* Create a new Composer object and use the getComposers function to pass in the composers */
  constructor() {
    this.composers = new Composer().getComposers();

   }

  ngOnInit(): void {
  }

}
