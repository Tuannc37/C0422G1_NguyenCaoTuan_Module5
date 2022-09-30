import { Injectable } from '@angular/core';
import {Customer} from "../../model/customer/customer";

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  customerList : Customer[] = [
    {
      id : 1,
      name: "Nguyễn Cao Tuấn",
      dateOfBirth: "1998-08-09",
      gender: true,
      idCard: "9894739372",
      phoneNumber: "0903131313",
      email: "tuannc1004@gmail.com",
      address: "Nghệ An",
      customerType: {
        id: 2,
        name: "Vip"
      }
    },
    {
      id: 2,
      name: "Nguyễn Hữu Thức",
      dateOfBirth: "1998-08-09",
      gender: false,
      idCard: "9894739372",
      phoneNumber: "3184434343",
      email: "huuthuc123@gmail.com",
      address: "Đà Nẵng",
      customerType: {
        id: 3,
        name: "Normal"
      }
    },
    {
      id: 3,
      name: "Võ Như Vinh",
      dateOfBirth: "2022-08-14",
      gender: true,
      idCard: "3131313131",
      phoneNumber: "0774564457",
      email: "vinh13@gmail.com",
      address: "Vinh",
      customerType: {
        id: 2,
        name: "Normal"
      }
    },
    {
      id: 4,
      name: "Nguyễn Văn A",
      dateOfBirth: "2022-08-14",
      gender: true,
      idCard: "3131313131",
      phoneNumber: "0774564457",
      email: "nguyenvan12@gmail.com",
      address: "Sài Gòn",
      customerType: {
        id: 4,
        name: "Normal"
      }
    }
  ];

  constructor() { }

  getAllCustomer(){
    return this.customerList;
  }

  saveCustomer(customer){
    this.customerList.push(customer);
  }

  updateByIdCustomer(customer:Customer){
    for(let i = 0 ;i < this.customerList.length;i++){
      if(this.customerList[i].id === customer.id){
        this.customerList[i] = customer;
      }
    }
    console.log(this.customerList);
  }

  findByIdCustomer(id:number){
    return this.customerList.find(customer => customer.id === id);
  }

  delete(id: number) {
    const index = this.customerList.findIndex(customer => customer.id === id);
    this.customerList.splice(index, 1);
  }

}
