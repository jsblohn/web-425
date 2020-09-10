/*
============================================
; Title:  app.component.ts
; Author: Professor Krasso
; Date:   28 August 2020
; Modified By: Janet Blohn
; Description: Bob's Computer Repair Application
; TypeScript for app.component of bobs-computer-repair
============================================
*/

// Import required module from Angular
import { Component } from '@angular/core';
import { FormBuilder, Validators, FormArray, NgModel } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'bobs-computer-repair4';
}
