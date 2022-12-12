import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  constructor() { }

  lista: string[] = ['test','test']
  element: string = ''
 
  addToList(){
    if (this.element == '') {
      alert("Wartość nie może być pusta")
    } else
    this.lista.push(this.element);
    this.element = '';
    }
  removeFromlist(index: number) {
    if (index> -1) {
      this.lista.splice(index, 1);
    }
    this.lista
  }
   ngOnInit() {
  }

}