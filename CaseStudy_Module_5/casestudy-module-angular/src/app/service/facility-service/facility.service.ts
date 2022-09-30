import { Injectable } from '@angular/core';
import {Facility} from "../../model/facility/facility";

@Injectable({
  providedIn: 'root'
})
export class FacilityService {
  facilityList: Facility[] = [
    {
      id: 1,
      name: "Villa Beach Front",
      area: 25000,
      cost: 10000000,
      maxPeople: 10,
      standardRoom: "vip",
      descriptionOtherConvenience: "Có hồ bơi",
      poolArea: 500,
      numberOfFloors: 4,
      facilityFree: "Karaoke",
      rentType: {
        id: 1,
        name: "year"
      },
      facilityType: {
        id: 1,
        name: "Villa"
      }
    },

    {
      id: 2,
      name: "Villa Beach Front",
      area: 25000,
      cost: 10000000,
      maxPeople: 10,
      standardRoom: "vip",
      descriptionOtherConvenience: "Có hồ bơi",
      poolArea: 500,
      numberOfFloors: 4,
      facilityFree: "Karaoke",
      rentType: {
        id: 3,
        name: "month"
      },
      facilityType: {
        id: 2,
        name: "House"
      }
    },

    {
      id: 3,
      name: "Villa Beach Front",
      area: 25000,
      cost: 10000000,
      maxPeople: 10,
      standardRoom: "vip",
      descriptionOtherConvenience: "Có hồ bơi",
      poolArea: 500,
      numberOfFloors: 4,
      facilityFree: "Karaoke",
      rentType: {
        id: 3,
        name: "year"
      },
      facilityType: {
        id: 3,
        name: "Room"
      }
    },

    {
      id: 4,
      name: "Villa Beach Front",
      area: 25000,
      cost: 10000000,
      maxPeople: 10,
      standardRoom: "vip",
      descriptionOtherConvenience: "Có hồ bơi",
      poolArea: 500,
      numberOfFloors: 4,
      facilityFree: "Karaoke",
      rentType: {
        id: 4,
        name: "hour"
      },
      facilityType: {
        id: 1,
        name: "Villa"
      }
    },
  ]

  getAllFacility(){
    return this.facilityList;
  }

  delete(id: number) {
    const index = this.facilityList.findIndex(facility => facility.id === id);
    this.facilityList.splice(index, 1);
  }

  constructor() { }
}
