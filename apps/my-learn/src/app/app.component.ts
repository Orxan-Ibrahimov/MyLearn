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
  
  GetDataFromMenu(data: boolean) {
    this.hiddenMenu = data;    
  }

  GetDataFromHeader(dataFromHeader:{isHidden:boolean}) {
    this.hiddenMenu = dataFromHeader.isHidden;   
  }  
  
}
