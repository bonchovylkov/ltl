import {Injectable,NgModule} from "@angular/core"
import {Http,Headers,Response} from "@angular/http"


@Injectable()
export class HeadersService {

    constructor(private _http :Http){}

   

    getUrlEncodedHeader():Headers{
        
      let headers = new Headers({ 'content-type': 'application/x-www-form-urlencoded' });
      return  headers;
    }

     getUrlJSONHeader():Headers{
        
      let headers = new Headers({ 'content-type': 'application/json' });
      return  headers;
    }
}