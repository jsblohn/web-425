/*
============================================
; Title: main.ts
; Author: Professor Krasso
; Date:   07 August 2020
; Modified By: Janet Blohn
; Description: Exercise 5.3 - Data Tables
; TypeScript for main.ts for in-n-out-booksp2 app
============================================
*/

/* Import required module from Angular */
import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
