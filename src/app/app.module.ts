import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';

import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { IconExampleComponent } from './pages/icon-example/icon-example.component';
import { LabelExampleComponent } from './pages/label-example/label-example.component';
import { ButtonExampleComponent } from './pages/button-example/button-example.component';

@NgModule({
  declarations: [
    AppComponent,
    IconExampleComponent,
    LabelExampleComponent,
    ButtonExampleComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    RouterModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
