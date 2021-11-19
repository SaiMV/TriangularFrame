import { NgModule,CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TfLabelComponent } from './tf-label.component';
import{TfIconModule}from'../tf-icon/tf-icon.module';

@NgModule({
  declarations: [TfLabelComponent],
  imports: [
    CommonModule,TfIconModule,

  ],
  exports:[TfLabelComponent],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class TfLabelModule { }
