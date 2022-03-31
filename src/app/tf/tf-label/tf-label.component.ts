import { Component, OnInit,Input } from '@angular/core';
import { COMPONENT_VARIABLE } from '@angular/platform-browser/src/dom/dom_renderer';

@Component({
  selector: 'tf-label',
  templateUrl: './tf-label.component.html',
  styleUrls: ['./tf-label.component.css']
})
export class TfLabelComponent implements OnInit {

  @Input() iconName: string;
  @Input() iconSize: Number = 22;

  @Input() text: string;
  @Input() textColor: string;
  @Input() textHoverHighlight: boolean = false;
  @Input() textUndeline: boolean = false;
  @Input() textHoverUndeline: boolean = false;
  @Input() textDisable:boolean = false;

  mainLabelClassName = "css-tf-main-label"
  className = "css-tf-text"

  constructor() { }

  ngOnInit() {

  }
  //disbled
  // background-col
  getMainLabelClassNames(){
    this.getMainLabelClassAfterStringCheck(this.iconName,'iconName','is-icon-available')
    return this.mainLabelClassName;
  }
  getMainLabelClassAfterStringCheck(property,propertyName,cssClass){
    if(!this.mainLabelClassName.includes(cssClass)){
        if(propertyName =="iconName" || propertyName =="textColor"){
          if(property != undefined && property != null && property != ''){
            this.mainLabelClassName+=' '+cssClass+' '
          }
        }
    }
  }

  getClassNames(){
    this.getClassAfterStringCheck(this.iconName,'iconName','css-tf-text-on-icon-display')
    this.getClass(this.textHoverHighlight, 'css-tf-text-hover');
    this.getClass(this.textDisable, 'css-tf-text-disable');
    this.getClass(this.textHoverUndeline, 'css-tf-text-hover-underline');
    this.getClass(this.textUndeline, 'css-tf-text-underline');
    // this.textHoverHighlight?this.className+=' css-tf-text-hover ':'';
    // this.textDisable?this.className+=' css-tf-text-disable ':'';
    // this.textHoverUndeline?this.className+=' css-tf-text-hover-underline ':'';
    // this.textUndeline?this.className+=' css-tf-text-underline ':'';
    return this.className;
  }

  getClass(property,cssClass){
    if(!this.className.includes(cssClass)){
      property?this.className+=' '+cssClass+' ':'';
    }
  }
  
  getClassAfterStringCheck(property,propertyName,cssClass){
    if(!this.className.includes(cssClass)){
        if(propertyName =="iconName" || propertyName =="textColor"){
          if(property != undefined && property != null && property != ''){
            this.className+=' '+cssClass+' '
          }
        }
    }
  }

   
}







