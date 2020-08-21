/*
============================================
; Title:  sign-in.service.ts
; Author: Professor Krasso
; Date:   20 August 2020
; Modified By: Janet Blohn
; Description: Exercise 7.2 - Reactive Forms
; Sign-In Service for gpa-calculator-app3
============================================
*/

/* Import required module from Angular */
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

// Export as SignInService
export class SignInService {

  // Define an Array for Student IDs
  studentIds : Array<number>;

  constructor() {
    // Populate the Array with IDs
    this.studentIds = [
      1007,
      1008,
      1009,
      1010,
      1011,
      1012
    ];
   }

   // Return the studentId if found; if not, return false
  validate(studentId: number) {
    return this.studentIds.some(id => id === studentId);
  }
}
