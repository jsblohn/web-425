/*
============================================
; Title: wishlist-create.component.ts
; Author: Professor Krasso
; Date:   12 August 2020
; Modified By: Janet Blohn
; Description: Exercise 6.2 - Input/Output Properties, Part 1
; Typescript module for wishlist-create.component for in-n-out-booksp4 app
============================================
*/

/* Import required modules from Angular */
import { Component, OnInit, Output, EventEmitter } from '@angular/core';


/* Import Application Modules and Components */
import { IWishlistItem } from '../wishlist-item.interface';

@Component({
  selector: 'app-wishlist-create',
  templateUrl: './wishlist-create.component.html',
  styleUrls: ['./wishlist-create.component.scss']
})

// Export as WishlistCreateComponent, implement on initialization
export class WishlistCreateComponent implements OnInit {
  // Output statement for new Item defined as an Event Emitter
  @Output() addItemEmitter = new EventEmitter<IWishlistItem>();

  item: IWishlistItem;

  // Create a new instance of the interface wishlist item

  constructor() {
    this.item = {} as IWishlistItem;
  }

  ngOnInit(): void {
  }

  // Call the addItemEmitter to emit the object and set the object empty
  addItem() {
    this.addItemEmitter.emit({
      title: this.item.title,
      authors: this.item.authors
    })

    this.item = {} as IWishlistItem;
  }
}
