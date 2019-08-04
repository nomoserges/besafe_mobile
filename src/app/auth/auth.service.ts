import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from  '@angular/common/http';

import { tap } from  'rxjs/operators';
import { Observable, BehaviorSubject } from  'rxjs';

import { Storage } from  '@ionic/storage';
import { User } from  './user';
import { AuthResponse } from  './auth-response';

const headers = new HttpHeaders()
.set('Content-Type', 'application/x-www-form-urlencoded');

const headersMultipart = new HttpHeaders().set(
  'Content-Type',
  'multipart/form-data'
);

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  data;
  //  user id storage
  storageUserid : String;
  //  login state indicator
  loginState: Boolean = false;
  AUTH_SERVER_ADDRESS:  string  =  'http://localhost/besafe_core/index.php/';
  authSubject  =  new  BehaviorSubject(false);

  constructor(private  httpClient:  HttpClient, private  storage:  Storage) { }

  /**
   * Register new user.
   * @param data 
   */
  register(data) {
    return this.httpClient.post(this.AUTH_SERVER_ADDRESS + 'users/register/', data, { headers: headers });
  }

  
  /**
   * Login a user.
   * @param data 
   */
  login(data) {
    return this.httpClient.post(this.AUTH_SERVER_ADDRESS + 'users/login/', data, { headers: headers });
  }

  /**
   * Logout a user.
   * We delete all storage informations.
   */
  async logout() {
    await this.storage.clear().then(() => {
      console.log('all keys cleared');
    });
    this.authSubject.next(false);
  }

  /**
   * Locking if a user is logged in
   */
  isLoggedIn() {
    return this.storage.get('userid');
  }
}
