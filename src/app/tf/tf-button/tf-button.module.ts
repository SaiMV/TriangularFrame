import { NgModule,CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TfButtonComponent } from './tf-button.component';

@NgModule({
  declarations: [TfButtonComponent],
  imports: [
    CommonModule
  ],
  exports:[TfButtonComponent],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]

})
export class TfButtonModule { }
