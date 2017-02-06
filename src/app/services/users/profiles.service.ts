import {Injectable,NgModule} from "@angular/core"
import {Http,Headers,Response,RequestOptions} from "@angular/http"
//import { Observable } from 'rxjs/Observable'
//import 'rxjs/add/operator/map'

import {AlertService} from "../alert.service"
import {ApiService} from "../api.service"
import {UsersService} from "./users.service"

import {Utils} from '../../app.utils'

@Injectable()
export class ProfilesService {
    loading = false;
    constructor(
         private apiSerive: ApiService,
         private usersService :UsersService,
         private alertService: AlertService){}

loadUsers(url:string, name:string, skip:number=0,take:number=10){

       return this.apiSerive.get(Utils.stringFormat(url,[name,skip,take]) , this.usersService.jwtHeader()) ;
       
   }
 
}