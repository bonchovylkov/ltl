import {Component, ElementRef, HostListener, ViewEncapsulation,Input} from '@angular/core';
import {GlobalState} from '../../../GlobalState';
import {layoutSizes} from '../../../theme';
import  {UsersService,EmitterService} from '../../../services'
import {AppSettings} from '../../../app.settings'

@Component({
  selector: 'ba-sidebar',
  encapsulation: ViewEncapsulation.None,
  styles: [require('./baSidebar.scss')],
  template: require('./baSidebar.html'),
  providers:[UsersService]
})
export class BaSidebar {
  public menuHeight:number;
  public isMenuCollapsed:boolean = false;
  public isMenuShouldCollapsed:boolean = false;
   public isLoggedIn:boolean = false;

  

   public display:boolean = null


  constructor(private _elementRef:ElementRef,
   private _state:GlobalState,
  private _userService: UsersService) {

    this.isLoggedIn =_userService.isLoggedIn(); 
    this.display = this.isLoggedIn
    //this would be emmitet from the contructor of the home
    //this is how i am able to pass data/or just commands from component to component
    EmitterService.get(AppSettings.EMITTER_KEY_HIDE_ASIDE).
    subscribe(data => {
       this.display = data
      });

    this._state.subscribe('menu.isCollapsed', (isCollapsed) => {
      this.isMenuCollapsed = isCollapsed;
    });
  }

  public ngOnInit():void {
    if (this._shouldMenuCollapse()) {
      this.menuCollapse();
    }
  }

  public ngAfterViewInit():void {
    setTimeout(() => this.updateSidebarHeight());
  }

  @HostListener('window:resize')
  public onWindowResize():void {

    var isMenuShouldCollapsed = this._shouldMenuCollapse();

    if (this.isMenuShouldCollapsed !== isMenuShouldCollapsed) {
      this.menuCollapseStateChange(isMenuShouldCollapsed);
    }
    this.isMenuShouldCollapsed = isMenuShouldCollapsed;
    this.updateSidebarHeight();
  }

  public menuExpand():void {
    this.menuCollapseStateChange(false);
  }

  public menuCollapse():void {
    this.menuCollapseStateChange(true);
  }

  public menuCollapseStateChange(isCollapsed:boolean):void {
    this.isMenuCollapsed = isCollapsed;
    this._state.notifyDataChanged('menu.isCollapsed', this.isMenuCollapsed);
  }

  public updateSidebarHeight():void {
    // TODO: get rid of magic 84 constant
    this.menuHeight = this._elementRef.nativeElement.childNodes[0].clientHeight - 84;
  }

  private _shouldMenuCollapse():boolean {
    return window.innerWidth <= layoutSizes.resWidthCollapseSidebar;
  }
}
