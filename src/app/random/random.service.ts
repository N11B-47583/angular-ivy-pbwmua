import { Injectable } from '@angular/core';

@Injectable()
export class RandomService {
  constructor() {}

  public getRandomBoolean(): boolean {
    return Math.random() < 0.5;
  }

  public getRandomNumber(max: number): number {
    return Math.floor(Math.random() * max);
  }
}
