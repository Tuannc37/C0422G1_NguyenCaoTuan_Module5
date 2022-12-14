import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {RentType} from "../../../model/facility/rent-type";
import {FacilityType} from "../../../model/facility/facility-type";
import {Facility} from "../../../model/facility/facility";
import {RentTypeService} from "../../../service/facility-service/rent-type.service";
import {FacilityTypeService} from "../../../service/facility-service/facility-type.service";
import {FacilityService} from "../../../service/facility-service/facility.service";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";
import {checkPoolAreaAndFloors} from "../../../validator/check-pool-area-and-floors";

@Component({
  selector: 'app-facility-update',
  templateUrl: './facility-update.component.html',
  styleUrls: ['./facility-update.component.css']
})
export class FacilityUpdateComponent implements OnInit {

  facilityForm: FormGroup;
  rentTypeList: RentType[] = [];
  facilityTypeList: FacilityType[] = [];
  facility: Facility;
  facilityTypeId = '';
  id: number;
  validationMessages = {
    name: [
      {type: 'required', message: 'Vui lòng nhập tên'}
    ],
    area: [
      {type: 'required', message: 'Vui lòng nhập Diện Tích'}
    ],
    cost: [
      {type: 'required', message: 'Vui lòng nhập Phí Thuê'}
    ],
    maxPeople: [
      {type: 'required', message: 'Vui lòng nhập Số Người Tối Đa'}
    ],
    standardRoom: [
      {type: 'required', message: 'Vui lòng nhập Loại Phòng'}
    ],
    descriptionOtherConvenience: [
      {type: 'required', message: 'Vui lòng nhập Mô Tả'}
    ],
    poolArea: [
      {type: 'required', message: 'Vui lòng nhập Diện Tích Hồ Bơ'}
    ],
    numberOfFloors: [
      {type: 'required', message: 'Vui lòng nhập Số Tầng'}
    ],
    facilityFree: [
      {type: 'required', message: 'Vui lòng nhập Dịch Vụ Miễn Phí'}
    ]
  };

  constructor(private rentType: RentTypeService,
              private facilityType: FacilityTypeService,
              private facilityService: FacilityService,
              private router: Router,
              private activatedRoute: ActivatedRoute) {
    this.rentTypeList = rentType.rentTypeList;
    this.facilityTypeList = facilityType.facilityTypeList;
  }

  ngOnInit(): void {
    this.formFacility();
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      this.id = +paramMap.get('id');
      this.getFacility(this.id);
    });
  }

  getFacility(id: number) {
    this.facilityService.getByIdFacility(id).subscribe(facility => {
      this.formFacility();
      this.facilityTypeId = facility.facilityType.id + '';
      this.facilityForm.patchValue(facility);
      this.facilityForm.patchValue({facilityType: facility.facilityType.id});
      this.facilityForm.patchValue({rentType: facility.rentType.id});
      if (this.facilityTypeId === '1') {
        this.facilityForm.patchValue({facilityFree: NaN});
      } else if (this.facilityTypeId === '2') {
        this.facilityForm.patchValue({poolArea: 0});
        this.facilityForm.patchValue({facilityFree: NaN});
      } else if (this.facilityTypeId === '3') {
        this.facilityForm.patchValue({poolArea: 0});
        this.facilityForm.patchValue({numberOfFloors: 0});
        this.facilityForm.patchValue({descriptionOtherConvenience: NaN});
        this.facilityForm.patchValue({standardRoom: NaN});
      }
    });
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

  submit(id: number) {
    const facility = this.facilityForm.value;
    this.facilityService.editFacility(id, facility).subscribe(() => {
      this.router.navigateByUrl('facility');
      alert('Sửa thông tin thành công');
    });
  }

  formFacility() {
    this.facilityForm = new FormGroup({
      id: new FormControl(),
      name: new FormControl('', [
        Validators.required
      ]),
      area: new FormControl('', [
        Validators.required
      ]),
      cost: new FormControl('', [
        Validators.required
      ]),
      maxPeople: new FormControl('', [
        Validators.required
      ]),
      standardRoom: new FormControl('', [
        Validators.required
      ]),
      descriptionOtherConvenience: new FormControl('', [
        Validators.required
      ]),
      poolArea: new FormControl('', [
        Validators.required,
        checkPoolAreaAndFloors
      ]),
      numberOfFloors: new FormControl('', [
        Validators.required,
        checkPoolAreaAndFloors
      ]),
      facilityFree: new FormControl('', [
        Validators.required
      ]),
      rentType: new FormControl(),
      facilityType: new FormControl(),
    });
  }

}
