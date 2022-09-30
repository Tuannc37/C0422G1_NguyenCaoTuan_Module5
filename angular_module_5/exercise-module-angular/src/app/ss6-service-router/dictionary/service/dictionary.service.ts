import { Injectable } from '@angular/core';
import {Iword} from "../model/iword";

@Injectable({
  providedIn: 'root'
})
export class DictionaryService {

  iWordList: Iword[] = [];

  constructor() {
    this.iWordList.push({
      word: 'Toán',
      mean: 'Math',
    }, {
      word: 'Lý',
      mean: 'Physical',
    }, {
      word: 'Hoá',
      mean: 'subjectization',
    }, {
      word: 'Sinh',
      mean: 'disciple',
    });
  }

  getAll() {
    return this.iWordList;
  }

  getByMean(mean: string) {
    return this.iWordList.find(dictionary => dictionary.mean === mean);
  }
}
