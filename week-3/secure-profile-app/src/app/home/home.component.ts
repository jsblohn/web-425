/*
============================================
; Title:  home.component.ts
; Author: Professor Krasso
; Date:   23 July 2020
; Modified By: Janet Blohn
; Description: Exercise 3.3 - Passing Data to Routes, Part 2
; TypeScript for home.component for secure-profile-app app
============================================
*/

/* Import required module from Angular */
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

/* Export as HomeComponent, load on initialization, and define isLoggedIn boolean variable */
export class HomeComponent implements OnInit {
  isLoggedIn : Boolean = true;

  /* Assign the isLoggedIn value from the sign-in component */
  constructor(private route: ActivatedRoute) {
    this.isLoggedIn = Boolean(this.route.snapshot.queryParamMap.get('isLoggedIn'));
   }

  ngOnInit(): void {
  }

}
