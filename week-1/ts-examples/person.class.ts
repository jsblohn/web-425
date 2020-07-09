/*
============================================
; Title:  person.class.ts
; Author: Professor Krasso
; Date:   09 July 2020
; Modified By: Janet Blohn
; Description: Exercise 1.4 - TypeScript
; The implements the IPerson interface
============================================
*/

/* Let person.class know where to import IPerson from and import over interface */
import { IPerson } from "./person.interface";

class Person implements IPerson {
    firstName: string;
    lastName: string;

    constructor(firstName: string, lastName: string) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
}

/* Instantiate a new Person object */
let myName = new Person("Janet", "Blohn");
console.log(`My name is ${myName.firstName} ${myName.lastName}`);
