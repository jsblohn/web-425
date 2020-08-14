/*
============================================
; Title:  home.component.ts
; Author: Professor Krasso
; Date:   14 August 2020
; Modified By: Janet Blohn
; Description: Assignment 6.4 - Input Properties
; Typescript for home.component of gpa-calculator-app2
============================================
*/

/* Import required modules from Angular */
import { Component, OnInit } from '@angular/core';

// Import required application modules and components
import { ITranscript } from '../transcript.interface';
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

// Export as the HomeComponent
export class HomeComponent implements OnInit {

  // Define variables
  transcriptEntry: ITranscript;
  selectableGrades: Array<string> = ['A', 'A-', 'B+', 'B', 'B-', 'C+', 'C', 'C-', 'D+', 'D', 'D-', 'F'];
  transcriptEntries: Array<ITranscript> = [];
  gpaTotal: number = 0;

  constructor() {
    // Create empty ITranscript object and assign it to transcriptEntry variable
    this.transcriptEntry = {} as ITranscript;
  }

  ngOnInit(): void {
  }

  // Push a transcriptEntry to the transcriptEntries array; set the transcriptEntry as empty ITranscript object
  saveEntry() {
    this.transcriptEntries.push(this.transcriptEntry);
    this.transcriptEntry = {} as ITranscript;
  }

  // Calculate the grade point average
  calculateResults() {
    let gpa: number = 0;

    for (let entry of this.transcriptEntries) {
      switch(entry.grade) {
        case 'A':
          gpa += 4.0;
          break;
        case 'A-':
          gpa += 3.70;
          break;
        case 'B+':
          gpa += 3.33;
          break;
        case 'B':
          gpa +=3.00;
          break;
        case 'B-':
          gpa += 2.70;
          break;
        case 'C+':
          gpa += 2.3;
          break;
        case 'C':
          gpa += 2.00;
          break;
        case 'C-':
          gpa += 1.70;
          break;
        case 'D+':
          gpa += 1.30;
          break;
        case 'D':
          gpa += 1.00;
          break;
        case 'D-':
          gpa += 0.70;
          break;
        default:
          gpa += 0.00;
          break;
      }
    }
    this.gpaTotal = gpa / this.transcriptEntries.length;
  }

  // Clear the Transcript Entries
  clearEntries() {
    this.transcriptEntries = [];
    this.gpaTotal = 0;
  }
}
