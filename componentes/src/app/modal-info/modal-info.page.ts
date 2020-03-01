import { ModalController } from '@ionic/angular';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-modal-info',
  templateUrl: './modal-info.page.html',
  styleUrls: ['./modal-info.page.scss'],
})
export class ModalInfoPage implements OnInit {

  @Input() nombre;
  @Input() pais;

  constructor(private ModalCtrl: ModalController) { }

  ngOnInit() {
  }

  salirSinArg() {
    this.ModalCtrl.dismiss();
  }

  salirConArg() {
    this.ModalCtrl.dismiss();
  }

}
