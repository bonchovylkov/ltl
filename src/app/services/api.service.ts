import {Injectable,NgModule} from "@angular/core"
import {Http,Headers,Response} from "@angular/http"
import { Observable } from 'rxjs/Observable'
import 'rxjs/add/operator/map'

@Injectable()
export class ApiService {

    constructor(private _http :Http){}

   

    post(url:any,data:any, headers:Headers=null){
        
      
        return this._http.post(url, data,{headers: headers})
    }

    get(url:any,headers:Headers=null) {
            
            return this._http.get(url,{headers: headers})
                    .map((res: Response) => res.json())
    //              .do(data => console.log('server data:', data))  // debug
                 //   .catch(this.handleError);
        }

         /**
    * Handle HTTP error
    */
  private handleError (error: any) {
    // In a real world app, we might use a remote logging infrastructure
    // We'd also dig deeper into the error to get a better message
    let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg); // log to console instead
    return Observable.throw(errMsg);
  }
}