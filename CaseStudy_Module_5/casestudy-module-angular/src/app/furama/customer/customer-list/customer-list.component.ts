import {Component, OnInit} from '@angular/core';
import {Customer} from "../../../model/customer/customer";
import {CustomerType} from "../../../model/customer/customer-type";
import {CustomerService} from "../../../service/customer-service/customer.service";
import {CustomerTypeService} from "../../../service/customer-service/customer-type.service";
import {FormControl, FormGroup} from "@angular/forms";
import Swal from 'sweetalert2';

@Component({
  selector: 'app-customer',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {

  deleteId: number;
  deleteName: string;
  customerList: Customer[] = [];
  customerF: Customer = {};
  customerTypeList: CustomerType[] = [];
  searchForm: FormGroup;
  p = 1;

  constructor(private customerService: CustomerService,
              private customerTypeService: CustomerTypeService) {
  }

  ngOnInit(): void {
    this.getAll();
    this.customerTypeList = this.customerTypeService.customerTypeList;
    this.searchForm = new FormGroup({
      nameSearch: new FormControl(),
      searchIdCard: new FormControl()
    });
    this.searchForm.patchValue({customerTypeId: 0});
  }

  getAll() {
    this.customerService.getAllCustomer().subscribe(customers => this.customerList = customers);
  }

  getInfoToModal(customers: Customer) {
    this.customerF = customers;
  }

  searchCustomer() {
    this.customerService.searchCustomer(this.searchForm.value.nameSearch, this.searchForm.value.searchIdCard).subscribe(data => {
      this.customerList = data;
      console.log(data);
    }, error => {
    }, () => {
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
