
import {Component, ViewEncapsulation} from '@angular/core';
// import {BaMenuService} from '../../theme/services'
// import { MENU } from '../../app.menu';
// import {Routes } from '@angular/router';



@Component({
  selector: 'index',
  encapsulation: ViewEncapsulation.None,
  styles: [require('./index.scss')],
  template: require('./index.html')
})
export class Index {

  // constructor(private _menuService: BaMenuService,){
  //   this._menuService.updateMenuByRoutes(<Routes>MENU);
  // }
}
