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
  services: Array<IService>;
  selectedServices: Array<IService>;
  serviceForm: FormGroup;

  constructor(private fb: FormBuilder, private dialog: MatDialog) {
    // Create the Services Array
    this.services = [
      {serviceName: "Password Reset", price: 39.99},
      {serviceName: "Spyware Removal", price:99.99},
      {serviceName: "RAM Upgrade", price: 129.99},
      {serviceName: "Software Installation", price: 49.99},
      {serviceName: "Tune-up", price: 89.99},
      {serviceName: "Keyboard Cleaning", price: 45.00},
      {serviceName: "Disk Clean-up", price: 149.99}
    ]


   }

   // Return the Services Array
   get serviceFormArray(): FormArray {
     return this.serviceForm.controls.serviceOptions as FormArray;
   }

   // Add the checkboxes dynamically to each service
   private addServiceCheckboxes(): void {
     this.services.forEach(() => this.serviceFormArray.push(new FormControl(false)));
   }



  ngOnInit(): void {
    // Create the Angular Reactive Form
    this.serviceForm = this.fb.group({
      serviceOptions: new FormArray([])
    })

    // Add the checkboxes
    this.addServiceCheckboxes();


  }

  // Build the array of selected Services
  onSubmit() {
  this.selectedServices = this.serviceForm.value.serviceOptions
  .map((checked, index) => checked ? this.services[index] : null)
  .filter(v => v !== null);

  //Write object to the console
  console.log(this.selectedServices);
  const dialogRef = this.dialog.open(InvoiceDialogComponent,
    {data: {//partsAndLabor: this.getPartsLaborTotal(),
      repairs: this.selectedServices
  //list: this.invoiceEntries,
  //total: this.getTotal()},
      },
  disableClose: true
  });

  dialogRef.afterClosed().subscribe(result => {
    //if (result === "confirm") {
      //this.invoice = new Invoice();
   // }
  });

  this.clearForm();
  }


/*showInvoice() {
  this.selectedServices = this.serviceForm.value.serviceOptions
    .map((checked, index) => checked ? this.services[index] : null)
    .filter(v => v !== null);

  console.log(this.selectedServices);

const dialogRef = this.dialog.open(InvoiceDialogComponent,
  {data: {//partsAndLabor: this.getPartsLaborTotal(),
    repairs: this.selectedServices
//list: this.invoiceEntries,
//total: this.getTotal()},
    },
disableClose: true
});

dialogRef.afterClosed().subscribe(result => {
  if (result === "confirm") {
    //this.invoice = new Invoice();
  }
});

this.clearForm();
}*/

clearForm() {
/*this.invoice.setLaborCost(0.0);
this.invoice.setPartsCost(0.0);
this.total = 0;
this.servicesFormArray.controls.forEach(item => {
  item.setValue(false);
});*/
/*this.serviceRepairForm.controls.laborCost.setValue("");
this.serviceRepairForm.controls.partsCost.setValue("");
let e = {labor: 0.0, parts: 0.0};
this.addPartsLabor(e);*/
}


}
