import { Component, Input } from '@angular/core';
import { NavController } from 'ionic-angular';

/**
 * Generated class for the CustomBarComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'custom-bar',
  templateUrl: 'custom-bar.html'
})
export class CustomBarComponent {

  _title: string = '';
  _robots: boolean = false;
  _options: boolean = false;
  _mgoptions: boolean = false;
  _comments: boolean = false;

  constructor( public navCtrl: NavController ) {
    console.log('Hello CustomBarComponent Component');
  }

  navPage ( page ) {

    this.navCtrl.push( page );
  }

  @Input()
  set title ( title: string ) {
    this._title = title;
  }

  get title () {
    return this._title;
  }

  @Input()
  set robots ( robots: boolean ) {
    this._robots = robots;
  }

  get robots () {
    return this._robots;
  }

  @Input()
  set options ( options: boolean ) {
    this._options = options;
  }

  get options () {
    return this._options;
  }

  @Input()
  set mgoptions ( mgoptions: boolean ) {
    this._mgoptions = mgoptions;
  }

  get mgoptions () {
    return this._mgoptions;
  }

  @Input()
  set comments ( comments: boolean ) {
    this._comments = comments;
  }

  get comments () {
    return this._comments;
  }
}
