import { Injectable } from '@angular/core';
import {Country} from "./country";

@Injectable({
  providedIn: 'root'
})

export class ServiceService {
  countries: Country[] = [
    {id: 1, name: 'Hà Nội'},
    {id: 2, name: 'Đà Nẵng'},
    {id: 3, name: 'Vinh'},
  ];

  constructor() { }

  getAll() {
    return this.countries;
  }
}
