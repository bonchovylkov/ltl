import { Component,ViewEncapsulation } from '@angular/core';
import { MENU } from './app.menu'
import { RouterModule,Routes,  Event as RouterEvent,
    NavigationStart,
    NavigationEnd,
    NavigationCancel,
    NavigationError} from '@angular/router'
import {GlobalState} from './GlobalState'
import { BaMenuService } from './theme/services/baMenu';
import { BaThemeSpinner } from './theme/services/baThemeSpinner';
import { BaThemePreloader } from './theme/services/baThemePreloader';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  encapsulation: ViewEncapsulation.None,
  styles: [require('./app.component.scss')], //,require('./theme/sass/conf/conf.scss'),require('./theme/sass/_preloader.scss'),require('./theme/sass/_ionicons.scss')
  providers:[BaMenuService,BaThemeSpinner]
})
export class AppComponent {

   isMenuCollapsed: boolean = false;
loading: boolean = true;
  constructor(private _state: GlobalState,
              private _spinner: BaThemeSpinner,
              private _menuService: BaMenuService) {

    this._menuService.updateMenuByRoutes(<Routes>MENU);
    

    this._state.subscribe('menu.isCollapsed', (isCollapsed) => {
      this.isMenuCollapsed = isCollapsed;
    });
  }


    public ngAfterViewInit(): void {
    // hide spinner once all loaders are completed
    BaThemePreloader.load().then((values) => {
      this._spinner.hide();
    });
  }

   // Shows and hides the loading spinner during RouterEvent changes
    navigationInterceptor(event: RouterEvent): void {
        if (event instanceof NavigationStart) {
            this.loading = true;
        }
        if (event instanceof NavigationEnd) {
            this.loading = false;
        }

        // Set loading state to false in both of the below events to hide the spinner in case a request fails
        if (event instanceof NavigationCancel) {
            this.loading = false;
        }
        if (event instanceof NavigationError) {
            this.loading = false;
        }
    }
}
