import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ManualGuidingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-manual-guiding',
  templateUrl: 'manual-guiding.html',
})
export class ManualGuidingPage {

  title: string = 'Manual Guiding';
  positions: any = [
    {
      id: 1111
    },
    {
      id: 1112
    },
    {
      id: 1113
    },
    {
      id: 1114
    },
    {
      id: 1115
    }
  ];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ManualGuidingPage');
  }

}
