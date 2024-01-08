/* eslint-disable @typescript-eslint/no-empty-function */
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'online-education-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent {
  @Input()
  data!: boolean;
  @Input()
  colorData!: boolean;
  @Output() dataFormHeader: EventEmitter<{isDark:boolean, isHidden:boolean}> = new EventEmitter<{isDark:boolean, isHidden:boolean}>();
  isHidden = true;

  HideProfile(){
    this.isHidden = !this.isHidden;
console.log(this.isHidden);

  }
  HideMenu() {
    this.data = !this.data;
    this.SendData();
  }
  MakeDark(){
    this.colorData = !this.colorData;
    this.SendData();
  }

  SendData(){
    this.dataFormHeader.emit({isDark:this.colorData,isHidden:this.data});
  }
}
