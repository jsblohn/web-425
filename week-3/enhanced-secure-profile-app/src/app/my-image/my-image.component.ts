/*
============================================
; Title:  my-image.component.ts
; Author: Professor Krasso
; Date:   01 August 2020
; Modified By: Janet Blohn
; Description: Assignment 3.4 - Guarding Routes
; Component for my-image in enhanced-secure-profile-app app
============================================
*/

/* Import required module from Angular */
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-image',
  templateUrl: './my-image.component.html',
  styleUrls: ['./my-image.component.css']
})

/* Export this as MyImageComponent */
export class MyImageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
