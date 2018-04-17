import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';

import { User } from '../../providers/providers';
//import { MainPage } from '../pages';

/**
 * Generated class for the ConnectRobotPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-connect-robot',
  templateUrl: 'connect-robot.html',
})
export class ConnectRobotPage {

	title: string = 'Connect to Robot';
	
	account: { email: string, password: string } = {
		email: 'test@example.com',
		password: 'test'
	};

	isLogged: boolean = false;

	robotSelected: any;

	robots = [
		{
			name: 'Robot 1',
			icon: 'car',
			type: 'one-arm'
		},
		{
			name: 'Robot 2',
			icon: 'bus',
			type: 'two-arms'
		},
		{
			name: 'Robot 3',
			icon: 'boat',
			type: 'one-arm'
		},
		{
			name: 'Robot 4',
			icon: 'bicycle',
			type: 'two-arms'
		},
		{
			name: 'Robot 5',
			icon: 'car',
			type: 'one-arm'
		},
		{
			name: 'Robot 6',
			icon: 'bus',
			type: 'two-arms'
		},
		{
			name: 'Robot 7',
			icon: 'boat',
			type: 'one-arm'
		},
		{
			name: 'Robot 8',
			icon: 'bicycle',
			type: 'two-arms'
		}
	]    

	constructor(
		public navCtrl: NavController, 
		public navParams: NavParams,
		public user: User,
		public toastCtrl: ToastController ) {
			console.log(this.account)
	}

	doLogin() {

		this.user.login( this.account ).subscribe( ( resp ) => {

	  		// this.navCtrl.push(MainPage);
	  		this.showToast( 'Successful Login' );
	  		this.isLogged = true;

		}, ( err ) => {

			// Unable to log in
			console.log(err)
			this.showToast( err.message );
	  		this.isLogged = true;
		} );
	}

	showToast( msg ) {

		let toast = this.toastCtrl.create( {
			message: msg,
			duration: 3000,
			position: 'top'
		} );

  		toast.present();
	}

	selectRobot( key ) {
		
		this.robotSelected = ( key != this.robotSelected ) ? key : -1;
	}

	ionViewDidLoad() {
		console.log('ionViewDidLoad ConnectRobotPage');
	}
}
