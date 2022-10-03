import { Component, OnInit } from '@angular/core';
import {Contract} from "../../../model/contract/contract";
import {ContractService} from "../../../service/contract-service/contract.service";
import {CustomerService} from "../../../service/customer-service/customer.service";
import {FacilityService} from "../../../service/facility-service/facility.service";
import {Customer} from "../../../model/customer/customer";
import {Facility} from "../../../model/facility/facility";

@Component({
  selector: 'app-contract',
  templateUrl: './contract-list.component.html',
  styleUrls: ['./contract-list.component.css']
})
export class ContractListComponent implements OnInit {
  deleteId: number;
  deleteName: string;
  contractList: Contract[] = [];
  customerList:Customer[] =[];
  facilityList:Facility[] =[];

  constructor( private contractService:ContractService
               ,private customerService:CustomerService,private facilityService:FacilityService) { }

  ngOnInit(): void {
    this.getListAllContract();
    this.getAllListCustomer();
    this.getAllListFacility();
  }

  getListAllContract(){
    this.contractList = this.contractService.getAllContract();
  }

  getAllListCustomer(){
    this.customerService.getAllCustomer().subscribe(customers => this.customerList = customers);
  }

  getAllListFacility(){
    this.facilityService.getAllFacility().subscribe(facility => this.facilityList = facility);
  }

  deleteContract(temp:Contract){
    this.deleteId = temp.id;
    this.deleteName = temp.customer.name;
  }

  delete(idDelete: any) {
    this.contractService.delete(idDelete);
    this.ngOnInit();
  }

}
