import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { Router } from "@angular/router";

import { MyLittleServiceService } from './my-little-service.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  private pageState = this.theService.pageEven.subscribe((isPageEven) => {
    console.log('pageState: ', isPageEven);
    if (isPageEven) {
      this.router.navigate(['/pageOne']);
    }
    else {
      this.router.navigate(['/pageTwo']);
    }
  });

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private theService: MyLittleServiceService,
    private router: Router,
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
