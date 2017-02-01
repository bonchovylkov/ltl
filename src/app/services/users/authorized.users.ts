
import { Injectable } from '@angular/core';
import { CanActivate,Router } from '@angular/router';
import {UsersService } from './users.service';

@Injectable()
export class AuthorizedUsersGuard implements CanActivate {

    _userService:UsersService;
  constructor(
      private router: Router,
      userService: UsersService) {
    this._userService = userService
  }

  canActivate() {
    
    //if user is logged in can't go to certain page 
    if  (this._userService.isLoggedIn()){
            this.router.navigate(['/index/dashboard']);
            return false;
    }else {
        return true;
    }
  }
}