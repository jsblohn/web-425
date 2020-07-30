/*
; =============================================================
; Title:  main.ts
; Author: Professor Krasso
; Date:   30 July 2020
; Modified By: Janet Blohn
; Description: Exercise 4.3 – Handling Form Events with Observables
; main app module for reactive-composer-app
;=============================================================
*/

/* Import Angular modules */
import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

/* Import modules from reactive-composer-app */
import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

/* Enable ProdMode if this is a production environment */
if (environment.production) {
  enableProdMode();
}

/* Output errors to the console */
platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
