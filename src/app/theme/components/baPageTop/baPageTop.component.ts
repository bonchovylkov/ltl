import {Component, ViewEncapsulation} from '@angular/core';
import  {UsersService,EmitterService} from '../../../services'
import {GlobalState} from '../../../GlobalState';
import {AppSettings} from '../../../app.settings'

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

   //TODO: when the method for getting basic user info is ready - have to set it here

  constructor(private _state:GlobalState,
  private _userService: UsersService) {


       EmitterService.get(AppSettings.EMITTER_KEY_USER_LOGGED_IN).
    subscribe(data => {
       this.isLoggedIn =_userService.isLoggedIn(); 
      });

    this.isLoggedIn =_userService.isLoggedIn(); 
    this._state.subscribe('menu.isCollapsed', (isCollapsed) => {
      this.isMenuCollapsed = isCollapsed;
    });
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
