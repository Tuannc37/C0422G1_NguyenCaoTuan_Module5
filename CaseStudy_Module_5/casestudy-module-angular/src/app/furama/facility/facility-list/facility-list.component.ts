import { Component, OnInit } from '@angular/core';
import {Facility} from "../../../model/facility/facility";
import {FacilityType} from "../../../model/facility/facility-type";
import {RentType} from "../../../model/facility/rent-type";
import {FacilityService} from "../../../service/facility-service/facility.service";
import {FacilityTypeService} from "../../../service/facility-service/facility-type.service";
import {RentTypeService} from "../../../service/facility-service/rent-type.service";

@Component({
  selector: 'app-facility',
  templateUrl: './facility-list.component.html',
  styleUrls: ['./facility-list.component.css'],

})
export class FacilityListComponent implements OnInit {

  deleteId: number;
  deleteName: string;
  facilityList:Facility[] = [];
  facilityTypeList:FacilityType[] = [];
  rentTypeList: RentType[] = []

  constructor( private facilityService:FacilityService
               ,private facilityTypeService:FacilityTypeService,private rentTypeService:RentTypeService) { }

  ngOnInit(): void {
   this.getListAllFacilityType();
   this.getListAllFacility();
   this.getListAllRentType();
  }

  getListAllFacility(){
    this.facilityService.getAllFacility().subscribe(facility => this.facilityList = facility);
  }

  getListAllFacilityType(){
    this.facilityTypeList = this.facilityTypeService.getAllFacilityType();
  }

  getListAllRentType(){
    this.rentTypeList = this.rentTypeService.getAllRentType();
  }

  deleteFacility(temp: Facility) {
    this.deleteId = temp.id;
    this.deleteName = temp.name;
  }

  delete(idDelete: any) {
    this.facilityService.deleteFacility(idDelete).subscribe(() =>{
      alert('Xoá thông tin thành công');
      this.getListAllFacility();
    });
  }

}
