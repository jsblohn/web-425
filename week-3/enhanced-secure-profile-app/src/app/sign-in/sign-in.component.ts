/*
============================================
; Title:  sign-in.component.ts
; Author: Professor Krasso
; Date:   23 July 2020
; Modified By: Janet Blohn
; Description: Assignment 3.4 - Guarding Routes
; TypeScript for sign-in.component for enhanced-secure-profile-app app
============================================
*/

/* Import required module from Angular */
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})

/* Export as SignInComponent and load on initialization */
export class SignInComponent implements OnInit {

  isLoggedIn = false;
  constructor(private router: Router) {

   }

  ngOnInit(): void {
  }

  /* Function to sign the user in when submit button hit */
  signin() {
    this.isLoggedIn= true;
    this.router.navigate(['/home'], {queryParams: {isLoggedIn: this.isLoggedIn}, skipLocationChange: true})
  }

}
