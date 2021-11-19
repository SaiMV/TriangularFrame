import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IconExampleComponent } from './pages/icon-example/icon-example.component';
import {TfIconModule} from './tf/tf-icon/tf-icon.module';
import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { LabelExampleComponent } from './pages/label-example/label-example.component';
import {TfLabelComponent}from'./tf/tf-label/tf-label.component';
import {TfIconComponent} from './tf/tf-icon/tf-icon.component';
import{LabelExampleModule}from'./pages/label-example/label-example.module';
// import{TfLabelModule }from'./tf/tf-label/tf-label.module';
import{TfComponentsModule} from "./tf/tf-components.module";
import { ButtonExampleComponent } from './pages/button-example/button-example.component'

@NgModule({
  declarations: [
    AppComponent,
    IconExampleComponent,
    LabelExampleComponent,
    ButtonExampleComponent,

    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // TfIconModule,
    // TfLabelModule,
    TfComponentsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]

})
export class AppModule { }
