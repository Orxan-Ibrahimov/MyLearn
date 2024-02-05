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
  @Output() dataFormHeader: EventEmitter<{    
    isHidden: boolean;
  }> = new EventEmitter<{ isHidden: boolean }>();
  isHidden = true;

  HideProfile() {
    this.isHidden = !this.isHidden;
  }
  HideMenu() {
    this.data = !this.data;
    this.SendData();
  }
  MakeDark() {
    this.colorData = !this.colorData;
    document.documentElement.setAttribute("data-theme",this.colorData?"dark":"light");
    this.SendData();
  }

  SendData() {
    this.dataFormHeader.emit({isHidden: this.data });
  }
}
