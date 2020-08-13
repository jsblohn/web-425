/*
============================================
; Title: wishlist.component.ts
; Author: Professor Krasso
; Date:   12 August 2020
; Modified By: Janet Blohn
; Description: Exercise 6.2 - Input/Output Properties, Part 1
; Typescript module for wishlist.component for in-n-out-booksp4 app
============================================
*/

/* Import required modules from Angular */
import { Component, OnInit } from '@angular/core';

/* Import Application Modules and Components */
import { IWishlistItem } from '../wishlist-item.interface';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.scss']
})

// Export as WishlistComponent, implement on initialization
export class WishlistComponent implements OnInit {

  items: Array<IWishlistItem> = [];

  constructor() {

   }

  ngOnInit(): void {
  }

  // Add an item to the array
  updateItemsHandler(item: IWishlistItem) {
    this.items.push(item);
  }

}
