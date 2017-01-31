import {Injectable,NgModule} from "@angular/core"

import { Router } from '@angular/router';

import {UsersService} from "../users/users.service"
import {AlertService} from "../alert.service"
import {HeadersService} from "../headers.service"
import {ApiService} from "../api.service"

import {AppSettings} from "../../app.settings"
import {Utils} from "../../app.utils"
import {UserRegister,UserLogin} from '../../models'

@Injectable()
export class FitnessProgramsService {
    loading = false;
    constructor(
         private router: Router,
         private apiSerive: ApiService,
         private usersService: UsersService,
         private headersService: HeadersService){}

   loadFitnessPrograms(url:string,skip:number=null,take:number=null){
       this.loading = true;
      return this.apiSerive.get(Utils.stringFormat(url,[skip,take]),this.usersService.jwtHeader()) 
       
   }

    loadFitnessProgramDetails(url:string,id:number){
       this.loading = true;
      return this.apiSerive.get(Utils.stringFormat(url,[id]),this.usersService.jwtHeader()) 
       
   }

     addCommentToProgram(url:string,data:any){
       this.loading = true;
      return this.apiSerive.post(url,data,this.usersService.jwtHeader()) 
       
   }

    addProgramInstance(url:string,data:any){
    this.loading = true;
      return this.apiSerive.post(url,data,this.usersService.jwtHeader()) 
    }


 
}