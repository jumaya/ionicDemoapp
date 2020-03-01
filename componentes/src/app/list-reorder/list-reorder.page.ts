import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-reorder',
  templateUrl: './list-reorder.page.html',
  styleUrls: ['./list-reorder.page.scss'],
})
export class ListReorderPage implements OnInit {

  personajes = ['Aquaman', 'Superman', 'Barman', 'Flash', 'Wonder Woman'];

  constructor() { }

  ngOnInit() {
  }

  doReorder(event) {
    console.log(event);     
    event.detail.complete();
  }

}
