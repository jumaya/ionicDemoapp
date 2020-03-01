import { ModalInfoPage } from './../modal-info/modal-info.page';
import { Component, OnInit, Input } from '@angular/core';
import { ValueAccessor } from '@ionic/angular/directives/control-value-accessors/value-accessor';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.page.html',
  styleUrls: ['./modal.page.scss'],
})
export class ModalPage implements OnInit {


  constructor( private modalCtrl: ModalController) { }

  ngOnInit() {
  }

  async onClick() {
    const modal = await this.modalCtrl.create({
      component: ModalInfoPage,
      componentProps: {
        nombre: 'Juan Sebastian',
        pais: 'Colombia',
      }     
    });
    return await modal.present();
  }
  

}
