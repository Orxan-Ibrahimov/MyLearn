import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'online-education-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent {
  title = 'my-learn';
  hiddenMenu = false;
  GetDataFormMenu(data: boolean) {
    this.hiddenMenu = data;    
  }

  GetDataFormHeader(data: boolean) {
    this.hiddenMenu = data;   
  }
}
