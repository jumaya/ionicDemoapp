import { Component, OnInit, ViewChild } from '@angular/core';
import { IonInfiniteScroll } from '@ionic/angular';

@Component({
  selector: 'app-infinite-scroll',
  templateUrl: './infinite-scroll.page.html',
  styleUrls: ['./infinite-scroll.page.scss'],
})
export class InfiniteScrollPage implements OnInit {

  /*@ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;*/
  data: any[] = Array(20);

  constructor() { }

  ngOnInit() {
  }

  loadData(event){    
    setTimeout(() => {
      const nuevoArr = Array(20);
      this.data.push( nuevoArr);
      event.target.complete();      
    }, 1000);
  }  

}
