/*
; =============================================================
; Title:  main.ts
; Author: Professor Krasso
; Date:   30 July 2020
; Modified By: Janet Blohn
; Description: Assignment 4.4 – Async Pipe
; main app module for enterprise-composer-app
;=============================================================
*/

/* Import Angular modules */
import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

/* Import modules from enterprise-composer-app */
import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

/* Enable ProdMode if this is a production environment */
if (environment.production) {
  enableProdMode();
}

/* Output errors to the console */
platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
