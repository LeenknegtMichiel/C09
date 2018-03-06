import { Component } from '@angular/core';
import { NavController, Events } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  pizza={
    title:"My Awesome Pizza",
    toppings:[
      {
        id:1,
        name:"pineapple"
      },{
        id:4,
        name:"Mushrooms"
      }
    ]
  }
  constructor(
    public navCtrl: NavController,
    private events:Events) {

  }
  about(){
    this.events.publish("tabsNavigateToAbout", this.pizza)
    //this.navCtrl.parent.select(1); //Tab 2, zo navigeer je correct in tabs
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
  }

}
