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
import { FormGroup, FormBuilder, Validators, FormArray, FormControl } from '@angular/forms';

// Import required application modules and components
import { IService } from '../service.interface';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  // Variables
  services: Array<IService>;
  selectedServices: Array<IService>;
  serviceForm: FormGroup;

  constructor(private fb: FormBuilder) {
    // Create the array of services
    this.services = [
      {serviceName: "Password Reset", price: 39.99},
      {serviceName:"Spyware Removal", price:99.99},
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
    // Create an Angular Reactive Form
    this.serviceForm = this.fb.group ({
      serviceOptions: new FormArray([])
    })

  // Add the checkboxes
  this.addServiceCheckboxes();
  }

  // Build an array of the selected services when the form is submitted
  onSubmit() {
    this.selectedServices = this.serviceForm.value.serviceOptions
      .map((checked, index) => checked ? this.services[index]: null)
      .filter(v => v !== null);

      // Verify selected services are correct
      console.log(this.selectedServices);
  }
}
