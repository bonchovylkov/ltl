import { Injectable } from '@angular/core';
import { CanActivate,Router } from '@angular/router';
import {UsersService } from './users.service';

@Injectable()
export class LoggedInGuard implements CanActivate {

    _userService:UsersService;
  constructor(
      private router: Router,
      userService: UsersService) {
    this._userService = userService
  }

  canActivate() {
    
    if  (!this._userService.isLoggedIn()){
            this.router.navigate(['/login']);
            return false;
    }else {
        return true;
    }
  }
}