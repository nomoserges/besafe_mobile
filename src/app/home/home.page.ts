import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { AuthService } from '../auth/auth.service';

import { Dialogs } from '@ionic-native/dialogs/ngx';
import { QRScanner, QRScannerStatus } from '@ionic-native/qr-scanner/ngx';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  qrScan : any;
  constructor(
    private authService   : AuthService,
    private router        : Router,
    public platform       : Platform,
    public dialogs        : Dialogs,
    public qr             : QRScanner) { 
      //  We disable scanning when back button is pressed
      this.platform.backButton.subscribeWithPriority(0, ()=>{
        document.getElementsByTagName("body")[0].style.opacity = "1";
        this.qrScan.unsubscribe();
      });
     }

  ngOnInit() {
    var loginState: any;
    loginState = this.authService.isLoggedIn();
    loginState.then((val) => {
      if (val === null || val === undefined) {
        this.router.navigateByUrl('login');
      }
    });
  }

  StartScanning () {
    this.qr.prepare().then((status:QRScannerStatus)=>{
      if (status.authorized) {
        this.qr.show();
        document.getElementsByTagName("body")[0].style.opacity = "0";
        this.qrScan = this.qr.scan().subscribe((textFound)=>{
          document.getElementsByTagName("body")[0].style.opacity = "1";
          this.qrScan.unsubscribe();
          this.dialogs.alert(textFound);
        }, (err)=>{
          this.dialogs.alert(JSON.stringify(err));
        })
      } else if (status.denied) {

      }
    })
  }

}
