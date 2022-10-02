import { Component, OnInit } from '@angular/core';
import {Customer} from "../../../model/customer/customer";
import {CustomerType} from "../../../model/customer/customer-type";
import {CustomerService} from "../../../service/customer-service/customer.service";
import {CustomerTypeService} from "../../../service/customer-service/customer-type.service";
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-customer',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {

  deleteId: number;
  deleteName: string;
  customerList:Customer[] = [];
  customerTypeList:CustomerType[] = [];
  searchForm: FormGroup;

  constructor( private customerService: CustomerService,private customerTypeService:CustomerTypeService) { }

  ngOnInit(): void {
    this.getListAllCustomer();
    this.getListAllCustomerType();

    this.searchForm = new FormGroup({
      nameSearch: new FormControl(),
      customerTypeId: new FormControl()
    });
  }

  getListAllCustomer(){
    this.customerList = this.customerService.getAllCustomer();
  }

  getListAllCustomerType(){
    this.customerTypeList = this.customerTypeService.getAllCustomerType();
  }

  deleteCustomer(temp: Customer) {
    this.deleteId = temp.id;
    this.deleteName = temp.name;
  }

  delete(idDelete: any) {
    this.customerService.delete(idDelete);
    this.ngOnInit();
  }

  // search() {
  //   const nameSearch = this.searchForm.value;
  //   this.customerService.search(nameSearch.nameSearch, nameSearch.customerTypeId).subscribe(customers => {
  //     this.customerList = customers;
  //   });
  // }

  // customerForm: FormGroup = new FormGroup({
  //   id: new FormControl(),
  //   name: new FormControl(),
  //   dateOfBirth: new FormControl(),
  //   gender: new FormControl(),
  //   idCard: new FormControl(),
  //   phoneNumber: new FormControl(),
  //   email: new FormControl(),
  //   address: new FormControl(),
  //   customerType: new FormGroup({
  //     id: new FormControl(),
  //     name: new FormControl()
  //   })
  // })
  //
  //   submit(){
  //     const customer = this.customerForm.value;
  //     this.customerService.saveCustomer(customer);
  //     this.customerForm.reset();
  //   }

  }
