import { NgModule,CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { TfLabelComponent } from './tf-label.component';
import {TfIconModule} from './tf-icon/tf-icon.module';
import{TfLabelModule }from'./tf-label/tf-label.module';
import{TfButtonModule }from'./tf-button/tf-button.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    TfIconModule,
    TfLabelModule,
    TfButtonModule,
  ],
  exports:[
    TfIconModule,
    TfLabelModule,
    TfButtonModule],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class TfComponentsModule { }
