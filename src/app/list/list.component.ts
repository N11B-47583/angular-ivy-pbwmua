import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  constructor() { }

  napisy: string[] = ['tsest','test']
  nowyNapis: string = ''
   
  addToList(){
    this.napisy.push(this.nowyNapis);
    this.nowyNapis = '';
  }

  ngOnInit() {
  }

}