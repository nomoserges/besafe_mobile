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

  AUTH_SERVER_ADDRESS:  string  =  'http://localhost/besafe_core/index.php/';
  authSubject  =  new  BehaviorSubject(false);

  constructor(private  httpClient:  HttpClient, private  storage:  Storage) { }

  register(user: User): Observable<AuthResponse> {
    return this.httpClient.post<AuthResponse>(`${this.AUTH_SERVER_ADDRESS}users/register/`, 
    user, {headers: headers}).pipe(
      tap(async (res:  AuthResponse ) => {
        if (res.msgType == 'success') {
          await this.storage.set("ACCESS_TOKEN", res.msgData.access_token);
          await this.storage.set("EXPIRES_IN", res.msgData.expires_in);
          await this.storage.set("userid", res.msgData.userid);
          this.authSubject.next(true);
        } else {
          this.authSubject.next(false);
        }
      })

    );
  }

  login(user: User): Observable<AuthResponse> {
    return this.httpClient.post(`${this.AUTH_SERVER_ADDRESS}users/login`, 
    user, {headers: headers}).pipe(
      tap(async (res: AuthResponse) => {
        if (res.msgType == 'success') {
          await this.storage.set("ACCESS_TOKEN", res.msgData.access_token);
          await this.storage.set("EXPIRES_IN", res.msgData.expires_in);
          await this.storage.set("userid", res.msgData.userid);
          this.authSubject.next(true);
        } else {
          this.authSubject.next(false);
        }
      })
    );
  }

  async logout() {
    await this.storage.remove("ACCESS_TOKEN");
    await this.storage.remove("EXPIRES_IN");
    await this.storage.remove("userid");
    this.authSubject.next(false);
  }

  isLoggedIn() {
    return this.authSubject.asObservable();
  }
}
