/*
============================================
; Title:  composer-list.component.ts
; Author: Professor Krasso
; Date:   30 July 2020
; Modified By: Janet Blohn
; Description: Exercise 4.3 – Handling Form Events with Observables
; Component for composer-list in composer-app
============================================
*/

/* Import required modules from Angular */
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';

/* Import the composer interface and the composer class */
import { IComposer } from '../composer.interface';
import { ComposerService } from '../composer.service';

@Component({
  selector: 'app-composer-list',
  templateUrl: './composer-list.component.html',
  styleUrls: ['./composer-list.component.css']
  })

   /* Export as ComposerListComponent, create an Array of composers */
export class ComposerListComponent implements OnInit {
  /* Create a variables for the Composers and the FormControl Object (Search input field) */
  composers: Array<IComposer>;
  txtSearchControl = new FormControl('');

  /* Create a new Composer object and use the getComposers function to pass in the composers */
  constructor(private composerService: ComposerService) {
    this.composers = this.composerService.getComposers(); // Get the Composers
    // Subscribe to the value changes for txtSearchControl; use debounceTime to slow time the # of times the filterComposer function is called.
    this.txtSearchControl.valueChanges.pipe(debounceTime(500)).subscribe(val => this.filterComposers(val));
   }

  ngOnInit(): void {
  }

  /* A function to display the composer name as an alert */
  filterComposers(name: string) {
    alert(name);
  }
}
