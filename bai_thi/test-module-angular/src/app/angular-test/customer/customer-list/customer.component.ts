import { Component, OnInit } from '@angular/core';
import {Customer} from "../../../model/customer";
import {FormControl, FormGroup} from "@angular/forms";
import {CustomerService} from "../../../service/customer-service/customer.service";
import Swal from 'sweetalert2';
import {CustomerTypeService} from "../../../service/customer-service/customer-type.service";

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
  searchForm: FormGroup;
  p = 1;

  constructor(private customerService: CustomerService,private customerTypeService:CustomerTypeService) {
  }

  ngOnInit(): void {
    this.getAll();
    this.searchForm = new FormGroup({
      nameSearch: new FormControl(''),
      searchIdCard: new FormControl('')
    });
  }

  getAll() {
    // @ts-ignore
    this.customerService.getAllCustomer().subscribe(customers => this.customerList = customers.content);
  }

  getAllCartType(){
    this.customerService.getAllCustomer().subscribe(customers => this.customerList = customers);
  }

  getInfoToModal(customers: Customer) {
    this.customerF = customers;
  }

  searchCustomer() {
    this.customerService.searchCustomer(this.searchForm.value.nameSearch, this.searchForm.value.searchIdCard).subscribe(data => {
      this.customerList = data;
      console.log(data);
    })
  }

  deleteCustomer(temp: Customer) {
    this.deleteId = temp.id;
    this.deleteName = temp.name;
  }

  deleteCustomerJson(idDelete: number) {
    this.customerService.deleteCustomer(idDelete).subscribe(() => {
      Swal.fire('tieu de', 'Xóa thông tin thành công!', 'success');
      this.getAll()
    });
  }

}
