import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'online-education-menu',
  templateUrl: './menu.component.html',
})
export class MenuComponent {
  @Input() data: boolean | undefined;
  @Output() dataFormMenu: EventEmitter<boolean> = new EventEmitter<boolean>()

  HideMenu() {
    this.data = !this.data;  
    this.dataFormMenu.emit(this.data);      
  }
}
