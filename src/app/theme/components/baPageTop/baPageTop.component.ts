import {Component, ViewEncapsulation} from '@angular/core';
import  {UsersService,EmitterService} from '../../../services'
import { Router } from '@angular/router';
import {GlobalState} from '../../../GlobalState';
import {AppSettings} from '../../../app.settings'
import {UserProfileModel} from '../../../models'

@Component({
  selector: 'ba-page-top',
  styles: [require('./baPageTop.scss')],
  template: require('./baPageTop.html'),
  encapsulation: ViewEncapsulation.None,
  providers:[UsersService]
})
export class BaPageTop {

  public isScrolled:boolean = false;
  public isMenuCollapsed:boolean = false;
   public isLoggedIn:boolean = false;
   public userProfileInfo:UserProfileModel= null;

   //TODO: when the method for getting basic user info is ready - have to set it here

  constructor(private _state:GlobalState,
  private router: Router,
  private _userService: UsersService) {

       this.userProfileInfo = this._userService.getUserProfileInfo();

       EmitterService.get(AppSettings.EMITTER_KEY_USER_LOGGED_IN).
    subscribe(data => {
       this.isLoggedIn =_userService.isLoggedIn(); 
      });

    this.isLoggedIn =_userService.isLoggedIn(); 
    this._state.subscribe('menu.isCollapsed', (isCollapsed) => {
      this.isMenuCollapsed = isCollapsed;
    });
  }

logout(){
  this._userService.logout();
  this.router.navigate(['/']);
}


  public toggleMenu() {
    this.isMenuCollapsed = !this.isMenuCollapsed;
    this._state.notifyDataChanged('menu.isCollapsed', this.isMenuCollapsed);
    return false;
  }

  public scrolledChanged(isScrolled) {
    this.isScrolled = isScrolled;
  }
}
