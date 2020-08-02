/*
============================================
; Title:  composer-details.components.ts
; Author: Professor Krasso
; Date:   30 July 2020
; Modified By: Janet Blohn
; Description: Assignment 4.4 – Async Pipe
; Composer-detail component
============================================
*/

/* Import required modules from Angular */
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

/* Import the composer interface and the composer class */
import { IComposer } from '../composer.interface';
import { ComposerService } from '../composer.service';

@Component({
  selector: 'app-composer-details',
  templateUrl: './composer-details.component.html',
  styleUrls: ['./composer-details.component.css']
})

/* Export this module as ComposerDetailsComponent & implement on initialization */
export class ComposerDetailsComponent implements OnInit {

  /* Define the variables */
  composerId: number;
  composer: IComposer;

  constructor(private route: ActivatedRoute, private composerService: ComposerService) {
    /* Call the snapshot function to retrieve the composerId parameter value and assign it to the composerId variable */
    this.composerId = parseInt(this.route.snapshot.paramMap.get('composerId'), 10);
    /* If the composerId matches the Array composerId, move the composer info in. */
    if (this.composerId) {
      this.composer = this.composerService.getComposer(this.composerId);
    }
   }

  ngOnInit(): void {
  }

}
