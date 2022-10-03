import { Injectable } from '@angular/core';
import {CustomerType} from "../../model/customer/customer-type";
import {environment} from "../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

const API_URL = `${environment.apiUrl}`;
@Injectable({
  providedIn: 'root'
})
export class CustomerTypeService {

  customerTypeList: CustomerType[] = [];

  constructor() {
    this.customerTypeList.push({
      id: 1,
      name: 'Diamond'
    }, {
      id: 2,
      name: 'Platinum'
    }, {
      id: 3,
      name: 'Gold'
    }, {
      id: 4,
      name: 'Silver'
    }, {
      id: 5,
      name: 'Member'
    });
  }

  // constructor(private http: HttpClient) {
  // }
  //
  // getAll(): Observable<any> {
  //   return this.http.get(API_URL + 'customerType');
  // }
  //
  // saveCategory(customerType): Observable<CustomerType> {
  //   return this.http.post<CustomerType>(API_URL + 'customerType', customerType);
  // }
  //
  // findById(id: number): Observable<CustomerType> {
  //   return this.http.get<CustomerType>(`${API_URL}category/${id}`);
  // }
  //
  // updateCategory(id: number, customerType: CustomerType): Observable<CustomerType> {
  //   return this.http.put<CustomerType>(`${API_URL}category/${id}`, customerType);
  // }
  //
  // deleteCategory(id: number): Observable<CustomerType> {
  //   return this.http.delete<CustomerType>(`${API_URL}category/${id}`);
  // }
}

