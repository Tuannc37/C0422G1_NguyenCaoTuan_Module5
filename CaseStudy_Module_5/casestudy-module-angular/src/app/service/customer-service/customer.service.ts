import { Injectable } from '@angular/core';
import {Customer} from "../../model/customer/customer";
import {CustomerTypeService} from "./customer-type.service";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../../environments/environment";

const SERVICE_URL = `${environment.apiUrl}`;
@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  customerList:Customer[] = [];

  constructor(private httpClient: HttpClient,private customerTypeService:CustomerTypeService) {
  }

  getAllCustomer():Observable<Customer[]>{
    return this.httpClient.get<Customer[]>(SERVICE_URL + '/customers');
  }

  saveCustomer(customer: Customer): Observable<Customer> {
    this.setValueCustomerType(customer);
    return this.httpClient.post<Customer>(SERVICE_URL + '/customers', customer);
  }

  findByIdCustomer(id: number): Observable<Customer> {
    return this.httpClient.get<Customer>(`${SERVICE_URL}/customers/${id}`);
  }

  deleteCustomer(id: number): Observable<Customer> {
    return this.httpClient.delete<Customer>(`${SERVICE_URL}/customers/${id}`);
  }

  editCustomer(id: number, customer: Customer): Observable<Customer> {
    this.setValueCustomerType(customer);
    return this.httpClient.put<Customer>(`${SERVICE_URL}/customers/${id}`, customer);
  }

  setValueCustomerType(customer) {
    for (const item of this.customerTypeService.customerTypeList) {
      if (item.id === customer.customerType) {
        customer.customerType = item;
      }
    }
  }

  searchCustomer(nameCustomer: string, idCard: string): Observable<Customer[]> {
    return this.httpClient.get<Customer[]>(SERVICE_URL + "?name_like=" + nameCustomer + "&idCard_like=" + idCard);
  }

}
