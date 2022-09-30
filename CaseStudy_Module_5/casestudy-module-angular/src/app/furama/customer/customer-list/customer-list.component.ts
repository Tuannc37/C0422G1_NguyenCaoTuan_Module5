import { Component, OnInit } from '@angular/core';
import {Customer} from "../../../model/customer/customer";
import {CustomerType} from "../../../model/customer/customer-type";
import {CustomerService} from "../../../service/customer-service/customer.service";
import {CustomerTypeService} from "../../../service/customer-service/customer-type.service";

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

  constructor( private customerService: CustomerService,private customerTypeService:CustomerTypeService) { }

  ngOnInit(): void {
    this.getListAllCustomer();
    this.getListAllCustomerType();
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

}
