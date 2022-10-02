import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {Customer} from "../../../model/customer/customer";
import {CustomerService} from "../../../service/customer-service/customer.service";
import {CustomerTypeService} from "../../../service/customer-service/customer-type.service";
import {ActivatedRoute, ParamMap} from "@angular/router";
import {CustomerType} from "../../../model/customer/customer-type";

@Component({
  selector: 'app-customer-update',
  templateUrl: './customer-update.component.html',
  styleUrls: ['./customer-update.component.css']
})
export class CustomerUpdateComponent implements OnInit {
  customerTypeList:CustomerType[] = [];
  customerList:Customer[] = [];
  customerForm: FormGroup;
  customer:Customer;

  constructor( private customerService:CustomerService,private customerTypeService:CustomerTypeService
               ,private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.getAllCustomerType();

    this.customerForm = new FormGroup({
      id: new FormControl(),
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
    });

    this.activatedRoute.paramMap.subscribe((pramMap: ParamMap) => {
      const id = +pramMap.get('id');
      this.customer = this.customerService.findByIdCustomer(id);
      this.customerForm.patchValue(this.customer);
    });
  }

  getAllCustomerType() {
    this.customerTypeList = this.customerTypeService.getAllCustomerType();
  }

  submit() {
    const customer = this.customerForm.value;
    this.customerService.updateByIdCustomer(customer);
  }

}
