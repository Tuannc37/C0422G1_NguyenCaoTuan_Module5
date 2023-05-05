import { Injectable } from '@angular/core';
import {environment} from '../../../environments/environment';
import {Customer} from '../../model/customer';
import {HttpClient} from '@angular/common/http';
import {CustomerTypeService} from './customer-type.service';
import {Observable} from 'rxjs';
import {CustomerType} from '../../model/customer-type';


const SERVICE_URL = `${environment.apiUrl}`;
@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private httpClient: HttpClient, private customerTypeService: CustomerTypeService) {
  }

  getAllCustomer(): Observable<Customer[]> {
    return this.httpClient.get<Customer[]>(SERVICE_URL + '/customer/api');
  }

  getAllCustomerType(): Observable<CustomerType[]> {
    return this.httpClient.get<CustomerType[]>(' http://localhost:8080/customerType/api');
  }

  findByName(name, page): Observable<Customer[]> {
    return this.httpClient.get<Customer[]>(SERVICE_URL + '/customer/api?page=' + page + '&name=' + name);
  }

  saveCustomer(customer: Customer): Observable<Customer> {
    this.setValueCustomerType(customer);
    return this.httpClient.post<Customer>(SERVICE_URL + '/customer/api/add', customer);
  }

  findByIdCustomer(id: number): Observable<Customer> {
    return this.httpClient.get<Customer>(`${SERVICE_URL}/customer/api/find/${id}`);
  }

  deleteCustomer(id: number): Observable<Customer> {
    return this.httpClient.delete<Customer>(`${SERVICE_URL}/customer/api/delete/${id}`);
  }

  editCustomer(id: number, customer: Customer): Observable<Customer> {
    this.setValueCustomerType(customer);
    return this.httpClient.put<Customer>(`${SERVICE_URL}/customer/api/update/${id}`, customer);
  }

  setValueCustomerType(customer) {
    for (const item of this.customerTypeService.customerTypeList) {
      if (item.id === customer.customerType) {
        customer.customerType = item;
      }
    }
  }

  searchCustomer(nameCustomer: string, idCard: string): Observable<Customer[]> {
    return this.httpClient.get<Customer[]>(`${SERVICE_URL}/customerList?name_like=${nameCustomer}&idCard_like=${idCard}`);
  }
}

