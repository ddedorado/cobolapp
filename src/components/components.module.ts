import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomHeaderComponent } from './custom-header/custom-header';
import { CustomBarComponent } from './custom-bar/custom-bar';
import { IonicModule } from "ionic-angular";

@NgModule({
	declarations: [ 
    CustomHeaderComponent,
    CustomBarComponent 
  ],
	imports: [ CommonModule, IonicModule ],
	exports: [ 
    CustomHeaderComponent,
    CustomBarComponent
  ],
	schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class ComponentsModule {}
