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
  isDark = false;
  
  GetDataFromMenu(data: boolean) {
    this.hiddenMenu = data;    
  }

  GetDataFromHeader(dataFromHeader:{isDark:boolean,isHidden:boolean}) {
    this.hiddenMenu = dataFromHeader.isHidden;    
    this.isDark = dataFromHeader.isDark;    
  }  
  
}
