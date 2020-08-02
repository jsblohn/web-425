/*
============================================
; Title:  app.po.ts
; Author: Professor Krasso
; Date:   02 August 2020
; Modified By: Janet Blohn
; Description: Exercise 4.2 – Inversion of Control and Dependency Injection
; AppPage Promise setup
============================================
*/

import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo(): Promise<unknown> {
    return browser.get(browser.baseUrl) as Promise<unknown>;
  }

  getTitleText(): Promise<string> {
    return element(by.css('app-root .content span')).getText() as Promise<string>;
  }
}
