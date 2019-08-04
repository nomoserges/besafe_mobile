import { Component } from '@angular/core';
import { Router } from "@angular/router";

import { AuthService } from './auth/auth.service';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  constructor(
    private authService: AuthService, 
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private router: Router,
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.show();
    });
  }

  /**
   * Log out the user to the login page
   */
  doLogout(){
    this.authService.logout();
    this.router.navigateByUrl('login');
  }
}
