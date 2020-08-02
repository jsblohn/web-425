/*
============================================
; Title: composer.service.ts
; Author: Professor Krasso
; Date:   30 July 2020
; Modified By: Janet Blohn
; Description: Assignment 4.4 – Async Pipe
; Service for enterprise-composer-app
============================================
*/
/* Import Angular modules */
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { of } from 'rxjs';
import { map } from 'rxjs/operators';

/* Import IComposer from the composer interface (IComposer) */
import { IComposer } from './composer.interface';

@Injectable({
  providedIn: 'root'
})

/* Export the service with the composer Array and define the composers in the constructor */
export class ComposerService {
  composers: Array<IComposer>;

  constructor() {
    this.composers = [
      {composerId: 100, fullName: "Johann Strauss II", genre: "Classical"},
      {composerId: 200, fullName: "Johann Strauss I", genre: "Classical"},
      {composerId: 300, fullName: "Pyotr Tchaikovsky", genre: "Classical"},
      {composerId: 400, fullName: "Ludwig van Beethoven", genre: "Classical"},
      {composerId: 500, fullName: "Johannes Brahms", genre: "Classical"},
    ]
   }

   /* Return the composer */
  getComposers(): Observable<IComposer[]> {
    return of(this.composers);
  }

  /* Find the composer by composerId and return it */
  getComposer(composerId: number) {
    for (let composer of this.composers) {
      if (composer.composerId === composerId) {
        return composer;
      }
    }
  }

  /* This function observes and returns a specific composer searched for */
  filterComposers(name: string): Observable<IComposer[]> {
    return of(this.composers).pipe(map(composers => composers.filter(composer => composer.fullName.toLowerCase().indexOf(name) > -1)))
  }
}
