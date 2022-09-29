import { Component, OnInit } from '@angular/core';
import {Customer} from "../../../model/customer/customer";
import {CustomerType} from "../../../model/customer/customer-type";

@Component({
  selector: 'app-customer',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {

  valueDelete = [];
  customerList:Customer[] = [];
  customerTypeList:CustomerType[] = [];
  
  constructor() { }

  ngOnInit(): void {
  }

}
