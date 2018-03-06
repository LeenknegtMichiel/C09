import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }
  about(){
    this.navCtrl.parent.select(1); //Tab 2, zo navigeer je correct in tabs
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
  }

}
