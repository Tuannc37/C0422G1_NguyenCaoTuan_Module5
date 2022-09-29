import { Component, OnInit } from '@angular/core';
import {Country} from "./country";
import {ServiceService} from "./service.service";

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.css']
})
export class CountryComponent implements OnInit {

  country: Country[] = [];
  constructor(private countryService: ServiceService) { }

  ngOnInit(): void {
    this.country = this.countryService.getAll();
  }

}
