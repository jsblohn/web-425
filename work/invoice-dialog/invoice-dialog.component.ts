/*
============================================
; Title:  invoice-summary.component.ts
; Author: Professor Krasso
; Date:   28 August 2020
; Modified By: Janet Blohn
; Description: Bob's Computer Repair Application
; Typescript for invoice-summary.component of bobs-computer-repair
============================================
*/

/* Import required modules from Angular */
import { Component, OnInit, Input, Output, Inject } from '@angular/core';
//import { MatCheckboxModule } from '@angular/material/checkbox';
//import { MatCardModule } from '@angular/material/card';
//import { MatDialog } from '@angular/material/dialog';
import { FormGroup, FormBuilder, Validators, FormArray, FormControl, NgModel } from '@angular/forms';

import { IService } from '../service.interface'

import { Observable } from "rxjs";

import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Data } from '@angular/router';

@Component({
  selector: 'app-invoice-dialog',
  templateUrl: './invoice-dialog.component.html',
  styleUrls: ['./invoice-dialog.component.css']
})

export class InvoiceDialogComponent implements OnInit {
  repairs: Array<IService>;
  //selectedServices: Array<IService>;
  invoiceForm: FormGroup;
  //serviceName;
  //price;
  currentDate: number = Date.now();
//repairs;
serviceName;
price;
  orderMessage: string;

  constructor(private dialogRef: MatDialogRef<InvoiceDialogComponent>,
    @Inject(MAT_DIALOG_DATA) data){
      this.repairs = data.repairs;
      this.serviceName = data.serviceName;
      this.price = data.price;
      //this.repairs.serviceName = data.repairs.serviceName;
      //this.repairs.price = data.price;
    //this.serviceName = data.serviceName;
    //this.price = data.price;
    //this.invoiceEntries = {} as IInvoice[];
    //console.log("InvoiceEntry from invoice summ: ", this.invoice);
    //this.list = data.list;
    console.log("repairs:", this.repairs);
    }


  ngOnInit(): void {


  }

  /*onChange($event) {
    console.log($event);
    //console.log(this.invoiceEntries);
  }*/


  clearOrder() {
    //this.serviceEntries = [];
    //this.invoiceEntries = [];
    this.orderMessage = "Order Cancelled";
  }

}

/* original
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-invoice-dialog',
  templateUrl: './invoice-dialog.component.html',
  styleUrls: ['./invoice-dialog.component.css']
})
export class InvoiceDialogComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}*/
