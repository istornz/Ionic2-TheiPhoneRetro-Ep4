import { Component } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-details',
  templateUrl: 'details.html'
})
export class DetailsPage {

  nom: string;
  prenom: string;
  age: number;

  constructor(public navCtrl: NavController, private navParams: NavParams) {
    this.nom = navParams.get('nom');
    this.prenom = navParams.get('prenom');
    this.age = navParams.get('age');

    console.log(this.nom);
    console.log(this.prenom);
    console.log(this.age);
  }

}
