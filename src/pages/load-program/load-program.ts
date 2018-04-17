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

	openActionSheet( program, ind ) {

	    let actionSheet = this.actionSheetCtrl.create({
	      title: 'Modify your program',
	      buttons: [
	        {
	          text: 'Delete',
	          role: 'destructive',
	          icon: 'trash',
	          handler: () => {
	          	
	          	if ( this.programSelected == ind ) {
					
					this.programSelected = -1;
	          	}

    			this.programs.splice(ind, 1);

	          }
	        },
	        {
	          text: 'Cancel',
	          role: 'cancel',
	          icon: 'arrow-back',
	          handler: () => {
	            console.log('Cancel clicked');
	          }
	        }
	      ]
	    });
	    actionSheet.present();
	  }

  	ionViewDidLoad() {
    	console.log('ionViewDidLoad LoadProgramPage');
  	}
}
