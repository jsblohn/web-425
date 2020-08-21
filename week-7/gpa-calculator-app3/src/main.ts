/*
; =============================================================
; Title:  main.ts
; Author: Professor Krasso
; Date:   20 August 2020
; Modified By: Janet Blohn
; Description: Exercise 7.2 - Reactive Forms
; main app module for gpa-calculator-app3
;=============================================================
*/

/* Import Angular modules */
import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

// Import modules from gpa-calculator-app3
import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

// Enable ProdMode if this is a production environment
if (environment.production) {
  enableProdMode();
}

//Output errors to the console
platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
