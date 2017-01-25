import {Injectable,NgModule} from "@angular/core"
import {Http,Headers,Response,RequestOptions} from "@angular/http"
//import { Observable } from 'rxjs/Observable'
//import 'rxjs/add/operator/map'
import { Router } from '@angular/router';

import {AlertService} from "../alert.service"
import {HeadersService} from "../headers.service"
import {ApiService} from "../api.service"
import {EmitterService} from "../emitter.service"

import {AppSettings} from "../../app.settings"
import {UserRegister,UserLogin} from '../../models'

@Injectable()
export class UsersService {
    loading = false;
    constructor(
         private router: Router,
         private apiSerive: ApiService,
        // private alertService: AlertService,
         private headersService: HeadersService){}

   register(url:string,values:UserRegister, returnUrl:string){
       this.loading = true;
       this.apiSerive.post(url,values) 
       .subscribe(
                data => {
                   // this.alertService.success('Registration successful', true);
                    this.router.navigate([returnUrl]); //'/login'
                },
                error => {
                  //  this.alertService.error(error);
                    this.loading = false;
                });
   }

    login(url:string,values:UserLogin, returnUrl:string){
       this.loading = true;
       let headersUrlEncoded = this.headersService.getUrlEncodedHeader();

       this.apiSerive.post(url,values.toString(),headersUrlEncoded)
       .subscribe(
                data => {
                      let user = data.json();
                    if (user && user.access_token) {
                        // store user details and jwt token in local storage to keep user logged in between page refreshes
                        localStorage.setItem(AppSettings.CURRENT_USER, JSON.stringify(user));
                    }
                   // this.alertService.success('Login successful', true);

                    if (returnUrl){
                         EmitterService.get(AppSettings.EMITTER_KEY_USER_LOGGED_IN).emit(true);   
                         this.router.navigate([returnUrl]); //'/login'
                    }
                },
                error => {
                   // this.alertService.error(error);
                    this.loading = false;
                });
   }


    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem(AppSettings.CURRENT_USER);
    }

    isLoggedIn(user:Object=null){
        let isLoggedIn = false;

        let currentUser = user || JSON.parse(localStorage.getItem(AppSettings.CURRENT_USER));
         if (currentUser && currentUser.access_token) {
             isLoggedIn = true;
        }

        return isLoggedIn;
    }



     jwtHeader():Headers {
        // create authorization header with jwt token
        let currentUser = JSON.parse(localStorage.getItem(AppSettings.CURRENT_USER));
        if (this.isLoggedIn(currentUser)) {
            let headers = new Headers({ 'Authorization': 'Bearer ' + currentUser.access_token });
            return  headers;
           
        }else{
            return null;
        }
    }

     jwtRequestOptions():RequestOptions {
        // create authorization header with jwt token
       let headers = this.jwtHeader();

       if(headers){
            return new RequestOptions({ headers: headers });
       }else{
            return null;
        }
    }

 
}