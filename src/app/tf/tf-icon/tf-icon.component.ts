import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'tf-icon',
  templateUrl: './tf-icon.component.html',
  styleUrls: ['./tf-icon.component.css']
})
export class TfIconComponent implements OnInit {
  @Input() iconName: string;
  @Input() iconColor: string = 'black';
  @Input() iconSize: Number = 24;
  @Input() iconStroke : any = 'none';

  constructor() { 
  
  }

  ngOnInit() {
  
  }

  getIconSize(){
    //check null undefined or minimum icon size value 12
    if(this.iconSize != null && this.iconSize!= undefined && this.iconSize >= 12){
      return this.iconSize.toString()+"px";
    }else{
      return '24px'
    }
  }
  
    getSvg(iconName) {
        console.log("ss"+this.iconName)
        return this.iconName == 'nav-menu2'
      }
      setStoke(){
        if(this.iconSize != null && this.iconSize!= undefined &&this.iconStroke != 'none'){
          return
        }
      }

}
