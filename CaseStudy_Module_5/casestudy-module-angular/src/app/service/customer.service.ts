import { Injectable } from '@angular/core';
import {Customer} from "../model/customer/customer";

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  customerList : Customer[] = [
    {
      "id" : 1,
      "name": "Nguyễn Cao Tuấn",
      "dateOfBirth": "1998-08-09",
      "idCard": "9894739372",
      "phoneNumber": "0903131313",
      "email": "hoang@gmail.com",
      "address": "ĐN",
      "customerType": {
        "id": 1,
        "name": "Vip"
      }
    },
    {
      "id": 2,
      "name": "Nguyễn Hữu Thức",
      "dateOfBirth": "1998-08-09",
      "gender": false,
      "idCard": "9894739372",
      "phoneNumber": "3184434343",
      "email": "hoang@gmail.com",
      "address": "ĐN",
      "customerType": {
        "id": 1,
        "name": "Normal"
      }
    },
    {
      "name": "Võ Như Vinh",
      "gender": true,
      "dateOfBirth": "2022-08-14",
      "idCard": "3131313131",
      "phoneNumber": "0774564457",
      "email": "sangnguyenjp97@gmail.com",
      "address": "67 Lê Kim Lăng.Phường Hòa Thọ Đông",
      "customerType": {
        "id": 2,
        "name": "Normal"
      }
    }
  ];

  constructor() { }

  get AllCustomer(){
    return this.customerList;
  }

}
