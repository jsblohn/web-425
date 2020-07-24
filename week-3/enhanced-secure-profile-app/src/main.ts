/*
; =============================================================
; Title:  main.ts
; Author: Professor Krasso
; Date:   23 July 2020
; Modified By: Janet Blohn
; Description: Assignment 3.4 - Guarding Routes
; main app module for enhanced-secure-profile-app
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
