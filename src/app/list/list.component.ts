import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  constructor() { }

  napisy: string[] = ['test','test']
  nowyNapis: string = ''
  notify = new Notification('Hi there!')
  addToList(){
    if (this.nowyNapis == '') {
      alert("Wartość nie może być pusta.");
    } else
    this.napisy.push(this.nowyNapis);
    this.nowyNapis = '';
  }
  removeFromlist(index: number) {
    if (index> -1) {
      this.napisy.splice(index, 1);
    }
    this.napisy
  }
   ngOnInit() {
  }

}