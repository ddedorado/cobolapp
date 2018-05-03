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

	_title: string = 'Home';

	_home: any = {
			title: 'Home',
			icon: 'abb-home',
			value: 'HomePage'
	};

	_pages: any	= [
		{
			title: 'Error Reset',
			icon: 'abb-reset',
			value: 'HomePage'
		},
		{
			title: 'Connect to robot',
			icon: 'abb-connect',
			value: 'ConnectRobotPage'
		},
		{
			title: 'Load Program',
			icon: 'abb-load',
			value: 'LoadProgramPage'
		},
		{
			title: 'Manual Guiding',
			icon: 'abb-manualguiding',
			value: 'ManualGuidingPage'
		}
		/*{
			title: 'Modify Skills',
			icon: 'abb-modifyskill',
			value: ''
		}*/
	];

	constructor(public navCtrl: NavController) {
  	console.log( 'Hello HeaderComponent Component' );
	}

	navPage ( page ) {

		this.navCtrl.push( page );
	}

	ionViewCanLeave(): boolean {

     return true;
  }

	@Input()
	set title ( title: string ) {
		this._title = title;
	}

	get title () {
		return this._title;
	}
}
