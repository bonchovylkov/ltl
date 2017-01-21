
//this is how add outside dependency from node_modules ->types, and this allows you to use JQuery object
import 'jquery'
//same as the one aboce but this allows you to use _ 


import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule} from '@angular/forms'; //FormGroup, AbstractControl, FormBuilder, Validators 
import { HttpModule } from '@angular/http';
import {AppRouterModule} from './app.routing'
import {GlobalState} from './GlobalState'
//import {Index} from './pages/index/index'

//pages components
// import {Register} from './pages/register/index'
// import {Login} from './pages/login/index'
import {Register,Login,Home,Index} from './pages'

//pages sub components
import {CSSCarouselComponent} from './pages/components'

//themes components
import {BaPageTop,BaMsgCenter,BaSidebar,BaMenu,BaMenuItem} from './theme/components/index'
//pipes
import {BaProfilePicturePipe} from './pipes'
import { AppComponent } from './app.component';

//directives
import {BaSlimScroll} from './theme/directives/index'

//services - but app level services
import {UsersService,LoggedInGuard, ApiService,HeadersService,AlertService} from './services'

// Application wide providers
const APP_PROVIDERS = [
  //AppState,
  GlobalState,
  UsersService,
  ApiService,
  HeadersService,
  AlertService,
  LoggedInGuard
];


@NgModule({
  declarations: [
    AppComponent,
    
    //pages components
    Index, Register,Login,Home,

    //pages sub components
    CSSCarouselComponent,
    //theme components
    BaPageTop,BaMsgCenter,BaSidebar,BaMenu,BaMenuItem,
    //pipes
    BaProfilePicturePipe,
    //directives
    BaSlimScroll
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ReactiveFormsModule,
    HttpModule,
    AppRouterModule
  ],
  providers: [APP_PROVIDERS],
  bootstrap: [AppComponent]
})
export class AppModule { }
