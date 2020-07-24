/*
; =============================================================
; Title:  main.ts
; Author: Professor Krasso
; Date:   23 July 2020
; Modified By: Janet Blohn
; Description: Exercise 3.3  - Passing Data to Routes, Part 2
; main app module for enhanced-composer-app
;=============================================================
*/

/* Import Angular modules */
import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

/* Import modules from enhanced-composer-app */
import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

/* Output errors to the console */
platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
