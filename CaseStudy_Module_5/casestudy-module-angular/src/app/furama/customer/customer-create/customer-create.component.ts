import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {CustomerService} from "../../../service/customer-service/customer.service";
import {CustomerTypeService} from "../../../service/customer-service/customer-type.service";
import {CustomerType} from "../../../model/customer/customer-type";

@Component({
  selector: 'app-customer-create',
  templateUrl: './customer-create.component.html',
  styleUrls: ['./customer-create.component.css']
})
export class CustomerCreateComponent implements OnInit {
  customerTypeList:CustomerType[] = [];

  customerForm: FormGroup = new FormGroup({
    id : new FormControl(),
    name: new FormControl(),
    dateOfBirth: new FormControl(),
    gender: new FormControl(),
    idCard: new FormControl(),
    phoneNumber: new FormControl(),
    email: new FormControl(),
    address: new FormControl(),
    customerType: new FormGroup({
      id: new FormControl(),
      name: new FormControl()
    })


  })
  constructor( private customerService:CustomerService,private customerTypeService:CustomerTypeService) { }

  ngOnInit(): void {
  }

  submit(){
    const customer = this.customerForm.value;
    this.customerService.saveCustomer(customer);
    this.customerForm.reset();
  }

}