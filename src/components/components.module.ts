import { NgModule } from '@angular/core';
import { GooglePlacesComponent } from './google-places/google-places';
import { IonicModule } from 'ionic-angular';
import { CommonModule } from '@angular/common';

@NgModule({
	declarations: [GooglePlacesComponent],
	imports: [
		CommonModule,
		IonicModule,
	],
	exports: [GooglePlacesComponent]
})
export class ComponentsModule { }
