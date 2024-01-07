/* eslint-disable @typescript-eslint/no-empty-function */
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'online-education-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent {
  @Input() data: boolean | undefined;
  @Output() dataFormHeader: EventEmitter<boolean> = new EventEmitter<boolean>();

  HideMenu() {
    this.data = !this.data;
    this.dataFormHeader.emit(this.data);
  }
}
