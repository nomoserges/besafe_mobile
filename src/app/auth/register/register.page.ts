import { Component, OnInit } from '@angular/core';
import { Router } from  "@angular/router";
import { AuthService } from '../auth.service';

import { Storage } from '@ionic/storage';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  constructor(
    private  authService:  AuthService, 
    private router: Router,
    private storage: Storage,
    public toastController: ToastController) { }
  
  async presentToast(toastMessage) {
    const toast = await this.toastController.create({
      message: toastMessage,
      duration: 2000
    });
    toast.present();
  }

  ngOnInit() {
    var loginState: any;
    loginState = this.authService.isLoggedIn();
    loginState.then((val) => {
      if (val === null || val === undefined) {
        
      } else {
        this.router.navigateByUrl('home');
      }
    });
  }

  register(form) {
    this.authService.register(form.value).subscribe((res) => {
      if (res['msgType'] === "error") {
        this.presentToast(res['msgBody']);
      } else {
        this.storage.set("ACCESS_TOKEN", res['msgData']['access_token']);
        this.storage.set("EXPIRES_IN", res['msgData']['expires_in']);
        this.storage.set("userid", res['msgData']['userid']);
        this.router.navigateByUrl('home');
      }
    });
  }

}
