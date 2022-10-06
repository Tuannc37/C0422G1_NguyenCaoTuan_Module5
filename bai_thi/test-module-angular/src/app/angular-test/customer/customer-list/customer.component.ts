import { Component, OnInit } from '@angular/core';
import {Customer} from "../../../model/customer";
import {FormControl, FormGroup} from "@angular/forms";
import {CustomerService} from "../../../service/customer-service/customer.service";
import Swal from 'sweetalert2';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  deleteId: number;
  deleteName: string;
  customerList: Customer[] = [];
  customerF: Customer = {};
  name: string = "";
  page: number = 0;
  totalPage: number;

  constructor(private customerService: CustomerService) {
  }

  ngOnInit(): void {
    this.searchAndListCustomer();
    this.getAllCartType();
  }

  getAllCartType(){
    this.customerService.getAllCustomer().subscribe(customers => this.customerList = customers);
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
      console.log(this.totalPage)
    })
  }

  previous() {
    this.page = this.page - 1;
    return this.customerService.findByName(this.name, this.page).subscribe(cus => {
      // @ts-ignore
      this.customerList = cus.content;
      // @ts-ignore
      this.totalPage = cus.totalPages;
    })
  }

  next() {
    this.page = this.page + 1;
    return this.customerService.findByName(this.name, this.page).subscribe(cus => {
      // @ts-ignore
      this.customerList = cus.content;
      // @ts-ignore
      this.totalPage = cus.totalPages;
    })
  }

  deleteCustomer(temp: Customer) {
    this.deleteId = temp.id;
    this.deleteName = temp.name;
  }

  deleteCustomerJson(idDelete: number) {
    this.customerService.deleteCustomer(idDelete).subscribe(() => {
      Swal.fire('tieu de', 'Xóa thông tin thành công!', 'success');
      this.searchAndListCustomer()
    });
  }

}
