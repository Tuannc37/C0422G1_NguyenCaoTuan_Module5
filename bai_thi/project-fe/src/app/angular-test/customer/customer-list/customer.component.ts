import { Component, OnInit } from '@angular/core';

import Swal from 'sweetalert2';
import {Customer} from '../../../model/customer';
import {CustomerService} from '../../../service/customer-service/customer.service';
import {CustomerType} from '../../../model/customer-type';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  deleteId: number;
  deleteName: string;
  customerList: Customer[] = [];
  customerTypeList: CustomerType[] = [];
  customerF: Customer = {};
  name = '';
  page = 0;
  totalPage: number;

  constructor(private customerService: CustomerService) {
  }

  ngOnInit(): void {
    this.searchAndListCustomer();
  }

  getInfoToModal(customers: Customer) {
    this.customerF = customers;
  }

  searchAndListCustomer() {
    this.page = 0;
    return this.customerService.findByName(this.name, this.page).subscribe(cus => {
      // @ts-ignore
      this.customerList = cus.content;
      // @ts-ignore
      this.totalPage = cus.totalPages;
      console.log(this.totalPage);
    });
  }

  previous() {
    this.page = this.page - 1;
    return this.customerService.findByName(this.name, this.page).subscribe(cus => {
      // @ts-ignore
      this.customerList = cus.content;
      // @ts-ignore
      this.totalPage = cus.totalPages;
    });
  }

  next() {
    this.page = this.page + 1;
    return this.customerService.findByName(this.name, this.page).subscribe(cus => {
      // @ts-ignore
      this.customerList = cus.content;
      // @ts-ignore
      this.totalPage = cus.totalPages;
    });
  }

  deleteCustomer(temp: Customer) {
    this.deleteId = temp.id;
    this.deleteName = temp.name;
  }

  deleteCustomerJson(idDelete: number) {
    this.customerService.deleteCustomer(idDelete).subscribe(() => {
      Swal.fire('tieu de', 'Xóa thông tin thành công!', 'success');
      this.searchAndListCustomer();
    });
  }

}
