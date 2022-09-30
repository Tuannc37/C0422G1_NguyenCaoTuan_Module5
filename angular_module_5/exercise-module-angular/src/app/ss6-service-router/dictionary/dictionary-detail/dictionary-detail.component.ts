import { Component, OnInit } from '@angular/core';
import {Iword} from "../model/iword";
import {DictionaryService} from "../service/dictionary.service";
import {ActivatedRoute, ParamMap} from "@angular/router";

@Component({
  selector: 'app-dictionary-detail',
  templateUrl: './dictionary-detail.component.html',
  styleUrls: ['./dictionary-detail.component.css']
})
export class DictionaryDetailComponent implements OnInit {

  dictionary: Iword;

  constructor(private dictionaryService: DictionaryService,
              private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((pramMap: ParamMap) => {
      const mean = pramMap.get('mean');
      this.dictionary = this.dictionaryService.getByMean(mean);
    });
  }

}
