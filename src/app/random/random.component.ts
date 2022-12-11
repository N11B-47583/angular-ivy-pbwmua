import { Component, OnInit } from '@angular/core';
import { RandomService } from './random.service';
import {Input} from '@angular/core'

@Component({
  selector: 'app-random',
  templateUrl: './random.component.html',
  styleUrls: ['./random.component.css']
})
export class RandomComponent implements OnInit {
  private maxNumber = 0;
  @Input()
  max = 100;

  myNumber = 0

  constructor(
    private RandomSerivce:RandomService
  ) {

   }
  getMaxNumber() {
    return this.maxNumber
  }
  getMax() {
    return this.max
  }
  setNewRandomValue() {
    this.myNumber = this.RandomSerivce.getRandomNumber(this.max);
  }
  ngOnInit() {
  }

}