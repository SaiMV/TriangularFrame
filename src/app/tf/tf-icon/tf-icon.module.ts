import { CommonModule } from '@angular/common';
import { TfIconComponent } from './tf-icon.component';
import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@NgModule({
  declarations: [TfIconComponent],
  imports: [
    CommonModule,
  ],  
  exports: [TfIconComponent],

  schemas:[CUSTOM_ELEMENTS_SCHEMA],

})
export class TfIconModule { }
