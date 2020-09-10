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
  invoiceForm: FormGroup;
  currentDate: number = Date.now();
serviceName;
price;
repairTotal;
partsFee;
laborFee;
partsLaborFee;
invoiceTotal;
orderMessage: string;

  constructor(private dialogRef: MatDialogRef<InvoiceDialogComponent>,
    @Inject(MAT_DIALOG_DATA) data){
      this.repairs = data.repairs;
      this.repairTotal = data.repairTotal;
      this.partsFee = data.partsFee;
      this.laborFee = data.laborFee;
      this.partsLaborFee = data.partsLaborFee;
      this.invoiceTotal = data.invoiceTotal;

    console.log("repairs:", this.repairs);
    }


  ngOnInit(): void {


  }

  clearInvoice() {
    //this.serviceEntries = [];
    this.repairs = [];
    this.repairTotal = 0;
    this.partsFee = 0;
    this.laborFee = 0;
    this.partsLaborFee = 0;
    this.invoiceTotal = 0;
    this.orderMessage = "Order Cancelled";

  }

}
