import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'FrogKing';
  isMobile = false;

  constructor() {
    var ua = navigator.userAgent;

    if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|Mobile|mobile|CriOS/i.test(ua)){
      console.log('mobile');
      this.isMobile = true;
    }

    else if(/Chrome/i.test(ua)){
      console.log('chrome');
    }

    else{
      console.log('pc');
    }
  }

}
