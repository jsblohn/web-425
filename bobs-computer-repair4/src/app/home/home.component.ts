/*
============================================
; Title:  home.component.ts
; Author: Professor Krasso
; Date:   28 August 2020
; Modified By: Janet Blohn
; Description: Bob's Computer Repair Application
; Typescript for home.component of bobs-computer-repair
============================================
*/

/* Import required modules from Angular */
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormArray, FormControl, Validators} from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';

// Import required application resources
import { IService } from '../service.interface';
import { InvoiceDialogComponent } from '../invoice-dialog/invoice-dialog.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  // Variables
  repairTotal: number = 0.0;
  services: Array<IService>;
  selectedServices: Array<IService>;
  serviceForm: FormGroup;
  serviceFormArray: FormArray;
  laborFee: number = 0.0;
  partsFee: number = 0.0;
  partsLaborFee: number = 0.0;
  invoiceTotal: number = 0.0;
  orderMessage: string;
  constructor(private fb: FormBuilder, private dialog: MatDialog) {


   };

   // Return the Services Array
   /*get serviceFormArray(): FormArray {
     return this.serviceForm.controls.serviceOptions as FormArray;
   }*/



  ngOnInit(): void {
    let totalsPattern = "[+-]?([0-9]*[.])?[0-9]+";
    // Create the Angular Reactive Form
    this.serviceForm = this.fb.group({
      serviceOptions: new FormArray([]),
      laborFee: new FormControl('', Validators.pattern(totalsPattern)),
      partsFee: new FormControl('', Validators.pattern(totalsPattern)),
      partsLaborFee: new FormControl(''),
      invoiceTotal: new FormControl('')
    });

  // Create the Services Array
  this.services = [
    {serviceName: "Password Reset", price: 39.99},
    {serviceName: "Spyware Removal", price:99.99},
    {serviceName: "RAM Upgrade", price: 129.99},
    {serviceName: "Software Installation", price: 49.99},
    {serviceName: "Tune-up", price: 89.99},
    {serviceName: "Keyboard Cleaning", price: 45.00},
    {serviceName: "Disk Clean-up", price: 149.99}
  ];

  this.serviceFormArray = this.serviceForm.controls.serviceOptions as FormArray;
  // Add the checkboxes
  this.addServiceCheckboxes();
  }

  // Add the checkboxes dynamically to each service
  private addServiceCheckboxes(): void {
    this.services.forEach(() => this.serviceFormArray.push(new FormControl(false)));
  }

  onCheckboxChanged(e) {
    console.log("start onchange section")
    console.log("e:", e);

    if (e.checked) {

      this.repairTotal = this.repairTotal + e.source.value;
    } else {
      this.repairTotal = this.repairTotal - e.source.value;
    }

    //console.log(this.invoiceEntries);
    console.log("esource name: ",  e.source.name);
    console.log("end onchange section");
  }

  // Build the array of selected Services
  onSubmit() {
    this.selectedServices = this.serviceForm.value.serviceOptions
    .map((checked, index) => checked ? this.services[index] : null)
    .filter(v => v !== null);

  //Write object to the console
  console.log(this.selectedServices);

    const dialogRef = this.dialog.open(InvoiceDialogComponent,
      {data: {
       repairs: this.selectedServices,
       repairTotal: this.getRepairTotal(),
       partsFee: this.getPartsFee(),
       laborFee: this.getLaborFee(),
       partsLaborFee: this.getPartsLaborFee(),
       invoiceTotal: this.getInvoiceTotal()
      },
    disableClose: true
    });

    dialogRef.afterClosed().subscribe(result => {
      //if (result === "confirm") {
      //this.invoice = new Invoice();
    //}
    });

    this.clearOrder();
  }

  clearOrder() {
  this.laborFee = 0.0;
  this.partsFee = 0.0;
  this.selectedServices = [];
  this.orderMessage = "Order has been cancelled";

  };

 setLaborFee(amount) {
    if (!amount) {
      this.laborFee = 0.0;
    } else {
      this.laborFee = amount * 50;
    }
  }

  setPartsFee(amount) {
    if (!amount) {
      this.partsFee = 0.0;
    } else {
      this.partsFee = amount;
    }
  }

  getRepairTotal() {
    return this.repairTotal;
  }

  getPartsFee() {
    return this.partsFee;
  }

  setPartsLaborFee(e) {
    if (e) {
     this.setLaborFee(parseFloat(e.labor));
     this.setPartsFee(parseFloat(e.parts));
     this.partsLaborFee = this.partsFee + this.laborFee;
    }
  }

  setInvoiceTotal() {

    this.invoiceTotal = this.getRepairTotal() + this.getPartsLaborFee();
  }

  getLaborFee() {
    return this.laborFee;
  }

  getPartsLaborFee()
 {
   return this.partsLaborFee;
 }

  getInvoiceTotal() {
    return this.repairTotal + this.partsLaborFee;
}
}
