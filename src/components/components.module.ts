import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomHeaderComponent } from './custom-header/custom-header';
import { IonicModule } from "ionic-angular";

@NgModule({
	declarations: [ CustomHeaderComponent ],
	imports: [ CommonModule, IonicModule ],
	exports: [ CustomHeaderComponent ],
	schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class ComponentsModule {}
