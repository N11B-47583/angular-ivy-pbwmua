import { Component, OnInit,Input } from '@angular/core';
import { RandomService } from './random.service';

@Component({
  selector: 'app-random',
  templateUrl: './random.component.html',
  styleUrls: ['./random.component.css']
})
export class RandomComponent implements OnInit {
  private maxNumber = 0;
  @Input()
  max = 100;

  myNumber = 0;

  constructor(
    private RandomSerivce:RandomService
  ) {}
  setNewRandomValue() {
    this.myNumber = this.RandomSerivce.getRandomNumber(this.max);
  }
  ngOnInit() {
  }

}