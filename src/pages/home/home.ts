import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { DetailsPage } from '../details/details';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  nom: string;
  prenom: string;
  age: number;

  constructor(public navCtrl: NavController) {
    
  }

  showDetails() {
    this.navCtrl.push(DetailsPage, { 
      nom: this.nom, 
      prenom: this.prenom, 
      age: this.age
    });
  }

}
