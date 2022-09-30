import { Injectable } from '@angular/core';
import {Contract} from "../../model/contract/contract";

@Injectable({
  providedIn: 'root'
})
export class ContractService {
  contractList: Contract[] = [
    {
      id: 1,
      startDate: '15-01-2022',
      endDate: '15-02-2022',
      deposit: 100,
      customer: {
        id: 1,
        name:"Nguyễn Quang Phúc"
      } ,
      facility: {
        id: 1,
        name: "Villa-01"
      }
    },
    {
      id: 2,
      startDate: '16-01-2022',
      endDate: '16-02-2022',
      deposit: 50,
      customer: {
        id: 1,
        name:"Nguyễn Thị Linh"
      } ,
      facility: {
        id: 2,
        name: "Villa-01"
      }
    },
    {
      id: 3,
      startDate: '17-01-2022',
      endDate: '17-02-2022',
      deposit: 100,
      customer: {
        id: 2,
        name:"Nguyễn Cao Tuấn"
      } ,
      facility: {
        id: 3,
        name: "Villa-01"
      }
    },
    {
      id: 4,
      startDate: '18-01-2022',
      endDate: '18-02-2022',
      deposit: 150,
      customer: {
        id: 3,
        name:"Nguyễn Quang Công"
      } ,
      facility: {
        id: 2,
        name: "Villa-01"
      }
    },
  ]

  constructor() { }

  getAllContract(){
    return this.contractList;
  }

  delete(id: number) {
    const index = this.contractList.findIndex(contract => contract.id === id);
    this.contractList.splice(index, 1);
  }


}
