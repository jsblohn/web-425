/*
============================================
; Title:  my-detail.component.ts
; Author: Professor Krasso
; Date:   16 July 2020
; Modified By: Janet Blohn
; Description: Exercise 2.3 - Data Binding
; Component for my-details in enhanced-profile-app app
============================================
*/

/* Import required module from Angular */
import { Component, OnInit } from '@angular/core';

/* Create and export a new TypeScript class called Person */
export default class Person {
  fullName: string;
  favoriteFood: string;
  favoriteColor: string;
  keywords = [
    "#TypeScript", "#2020", "#CodingWithAngular", "#ngOmaha"
  ];

  /* Define the constructor with the Person requirements */
  constructor (fullName: string, favoriteFood: string, favoriteColor: string) {
    this.fullName = fullName;
    this.favoriteFood = favoriteFood;
    this.favoriteColor = favoriteColor;
  }
}

/* Tell Angular to insert an instance of this component wherever the app-my-details tag is found in the template HTML and give URLs for HTML and CSS files */
@Component({
  selector: 'app-my-details',
  templateUrl: './my-details.component.html',
  styleUrls: ['./my-details.component.css']
})

/* Export this as MyDetailsComponent, define a variable called myProfile, and assign it to the Person data type */
export class MyDetailsComponent implements OnInit {
  myProfile: Person;
  constructor() {
    this.myProfile = new Person("Janet Blohn", "Pasta", "Gray");
    this.myProfile.toString();
   }

  ngOnInit(): void {
  }

}
