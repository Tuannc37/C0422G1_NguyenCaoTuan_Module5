import { Component, OnInit } from '@angular/core';
import {Song} from "./model/song";
import {SongService} from "./service/song.service";

@Component({
  selector: 'app-angular-product-management',
  templateUrl: './angular-product-management.component.html',
  styleUrls: ['./angular-product-management.component.css']
})
export class AngularProductManagementComponent implements OnInit {

  playlist: Song[] = [];

  constructor(private songService: SongService) {
  }

  ngOnInit() {
    this.getAll();
  }

  getAll() {
    this.playlist = this.songService.playlist;
  }

}
