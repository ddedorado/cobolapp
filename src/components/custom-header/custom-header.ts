import { Component, Input } from '@angular/core';
import { NavController } from 'ionic-angular';

/**
 * Generated class for the CustomHeaderComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'custom-header',
  templateUrl: 'custom-header.html'
})
export class CustomHeaderComponent {

	_title: string;
	_pages: any	= [
		{
			title: 'Connect to robot',
			icon: 'wifi',
			value: 'ConnectRobotPage'
		},
		{
			title: 'Load Program',
			icon: 'sync',
			value: 'LoadProgramPage'
		},
		{
			title: 'Manual Guiding',
			icon: 'game-controller-a',
			value: ''
		},
		{
			title: 'Modify Skills',
			icon: 'options',
			value: ''
		}
	];

  	constructor(public navCtrl: NavController) {
    	console.log( 'Hello HeaderComponent Component' );
  	}

	navPage ( page ) {
		this.navCtrl.push( page )
	}

	@Input()
	set title ( title: string ) {
		this._title = title;
	}

	get title () {
		return this._title;
	}
}
