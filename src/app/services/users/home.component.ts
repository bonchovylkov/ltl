//TODO:
//can be moved in the index/pages section
import {Component, ViewEncapsulation,OnInit} from '@angular/core';

import {FitnessProgramsService,EmitterService} from '../../services/'
import {AppSettings} from '../../app.settings'


@Component({
  selector: 'home',
  encapsulation: ViewEncapsulation.None, //this enables update of a parent element styling
  styles: [require('./home.scss')],
  template: require('./home.html'),
  providers:[FitnessProgramsService]
})
export class Home implements OnInit{

  fitnessPrograms:any[] = [];

  constructor(private _programsService:FitnessProgramsService) {
    
    EmitterService.get(AppSettings.EMITTER_KEY_HIDE_ASIDE).emit(false);
  }

  ngOnInit(){
   let items = this._programsService.loadFitnessPrograms(AppSettings.API_ENDPOINT_GET_FITNESS_PROGRAMS,0,3).subscribe(
                data => {
                   this.fitnessPrograms = data;
                },
                error => {
                  //  this.alertService.error(error);
                    console.log("error")
                });
    
  } 

}
