import { DataService } from './../services/data.service';
import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { Componente} from '../interfaces/interfaces';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  components: Observable<Componente[]>

  constructor(private menuCtrl: MenuController,
    private dataService: DataService
    ) { }

  ngOnInit() {
    this.components = this.dataService.getMenuOpts();
  }

  toggleMenu(){
    this.menuCtrl.toggle();     
  }

}


