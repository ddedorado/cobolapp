import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ActionSheetController } from 'ionic-angular';

/**
 * Generated class for the LoadProgramPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-load-program',
  templateUrl: 'load-program.html',
})
export class LoadProgramPage {
	
	title: string = 'Load Program';
	
	programSelected: any;

	programs = [
		{
			name: 'Program 1'
		},
		{
			name: 'Program 2'
		},
		{
			name: 'Program 3'
		},
		{
			name: 'Program 4'
		},
		{
			name: 'Program 5'
		},
		{
			name: 'Program 6'
		},
		{
			name: 'Program 7'
		},
		{
			name: 'Program 8'
		}
	]    

	constructor(public navCtrl: NavController, public navParams: NavParams, public actionSheetCtrl: ActionSheetController) {
		console.log(this.programs);
	}

	selectProgram( key ) {
		
		this.programSelected = ( key != this.programSelected ) ? key : -1;
	}

	ionViewDidLoad() {
  	console.log('ionViewDidLoad LoadProgramPage');
	}
}
