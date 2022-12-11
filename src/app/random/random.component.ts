import { Component, OnInit } from '@angular/core';
import { RandomService } from './random.service';
import {Input} from '@angular/core'

@Component({
  selector: 'app-random',
  templateUrl: './random.component.html',
  styleUrls: ['./random.component.css']
})
export class RandomComponent implements OnInit {
  maxNumber = 0;
  @Input()
  max = 100;
  constructor(
    private RandomSerivce:RandomService
  ) {

   }
  //setNewRandomValue()
  ngOnInit() {
  }

}