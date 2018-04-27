import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';

//import { User } from '../../providers/providers';

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

	title: string = 'Connect to robot';
	
	account: { email: string, password: string } = {
		email: 'test@example.com',
		password: 'test'
	};

	//isLogged: boolean = false;

	robotSelected: any;

	robots = [
		{
			name: 'YuMi',
			icon: 'abb-yumi',
			type: 'one-arm'
		},
		{
			name: 'YuMi 2',
			icon: 'abb-yumi',
			type: 'two-arms'
		}
	]    

	constructor(
		public navCtrl: NavController, 
		public navParams: NavParams,
		// public user: User,
		public toastCtrl: ToastController ) {
			console.log(this.account)
	}
 
	/*doLogin() {

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
	}*/

	/*showToast( msg ) {

		let toast = this.toastCtrl.create( {
			message: msg,
			duration: 3000,
			position: 'top'
		} );

  		toast.present();
	}*/

	selectRobot( key ) {
		
		this.robotSelected = ( key != this.robotSelected ) ? key : -1;
	}

	ionViewDidLoad() {
		console.log('ionViewDidLoad ConnectRobotPage');
	}
}
