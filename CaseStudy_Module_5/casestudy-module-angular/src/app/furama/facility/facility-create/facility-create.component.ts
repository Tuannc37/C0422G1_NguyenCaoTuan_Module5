import { Component, OnInit } from '@angular/core';
import {FormGroup} from "@angular/forms";
import {RentType} from "../../../model/facility/rent-type";
import {FacilityType} from "../../../model/facility/facility-type";
import {RentTypeService} from "../../../service/facility-service/rent-type.service";
import {FacilityTypeService} from "../../../service/facility-service/facility-type.service";
import {FacilityService} from "../../../service/facility-service/facility.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-facility-create',
  templateUrl: './facility-create.component.html',
  styleUrls: ['./facility-create.component.css']
})
export class FacilityCreateComponent implements OnInit {

  facilityForm: FormGroup;
  rentTypeList: RentType[] = [];
  facilityTypeList: FacilityType[] = [];
  facilityTypeId = '0: 1';

  constructor(private rentTypeService: RentTypeService,
              private facilityTypeService: FacilityTypeService,
              private facilityService: FacilityService,
              private router: Router) { }

  ngOnInit(): void {
    this.getListAllFacilityType();
    this.getListAllRentType();
  }

  getListAllFacilityType(){
    this.facilityTypeList = this.facilityTypeService.getAllFacilityType();
  }

  getListAllRentType(){
    this.rentTypeList = this.rentTypeService.getAllRentType();
  }

  selFacility(event) {
    this.facilityTypeId = event.target.value;
    if (this.facilityTypeId === '0: 1') {
      this.facilityForm.patchValue({facilityFree: NaN});
    } else if (this.facilityTypeId === '1: 2') {
      this.facilityForm.patchValue({poolArea: 0});
      this.facilityForm.patchValue({facilityFree: NaN});
    } else if (this.facilityTypeId === '2: 3') {
      this.facilityForm.patchValue({poolArea: 0});
      this.facilityForm.patchValue({numberOfFloors: 0});
      this.facilityForm.patchValue({descriptionOtherConvenience: NaN});
      this.facilityForm.patchValue({standardRoom: NaN});
    }
  }

}
