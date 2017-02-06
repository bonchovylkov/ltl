
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
import {Register,Login,Home,Index,FsDetails,Dashboard} from './pages'

//pages sub components
import {CSSCarouselComponent,Feed,AlertComponent} from './pages/components'

//themes components
import {BaPageTop,BaMsgCenter,BaSidebar,BaMenu,BaMenuItem,BaCard} from './theme/components/index'

import {BaMenuService} from './theme/services'
//pipes
import {BaProfilePicturePipe,TimeAgoPipe} from './pipes'
import { AppComponent } from './app.component';

//directives
import {BaSlimScroll} from './theme/directives/index'

//services - but app level services
import {UsersService,LoggedInGuard, ApiService,HeadersService,FeedMapperService,AuthorizedUsersGuard,ProfilesService,
  AlertService,FitnessProgramsService,EmitterService} from './services'


// Application wide providers
const APP_PROVIDERS = [
//them services
BaMenuService,

  //AppState,
  GlobalState,
  UsersService,
  ApiService,
  HeadersService,
  AlertService,
  LoggedInGuard,
  AuthorizedUsersGuard,
  FitnessProgramsService,
  EmitterService,
  ProfilesService,
  FeedMapperService
];


@NgModule({
  declarations: [
    AppComponent,
    
    //pages components
    Index, Register,Login,Home,FsDetails,Dashboard,

    //pages sub components
    CSSCarouselComponent,Feed,AlertComponent,
    //theme components
    BaPageTop,BaMsgCenter,BaSidebar,BaMenu,BaMenuItem,BaCard,
    //pipes
    BaProfilePicturePipe,TimeAgoPipe,
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
