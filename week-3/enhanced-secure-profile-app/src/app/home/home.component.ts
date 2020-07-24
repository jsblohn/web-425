/*
============================================
; Title:  home.component.ts
; Author: Professor Krasso
; Date:   23 July 2020
; Modified By: Janet Blohn
; Description: Assignment 3.4 - Guarding Routes
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

  // Create the component with ActivatedRoute
  constructor(private route: ActivatedRoute) {

   }

  ngOnInit(): void {
  }

}
