
import {Component, ViewEncapsulation,OnInit} from '@angular/core';

import {FitnessProgramsService} from '../../services/'
import {AppSettings} from '../../app.settings'


@Component({
  selector: 'fs-details',
  encapsulation: ViewEncapsulation.None,
  styles: [require('./fsdetails.scss')],
  template: require('./fsdetails.html'),
  providers:[FitnessProgramsService]
})
export class FsDetails implements OnInit{

  fitnessProgram:any = null;

  constructor(private _programsService:FitnessProgramsService) {
    
    
  }

  ngOnInit(){
   let items = this._programsService.loadFitnessProgramDetails(AppSettings.API_ENDPOINT_GET_FITNESS_PROGRAM_DETAILS,0).subscribe(
                data => {
                   this.fitnessProgram = data;
                },
                error => {
                  //  this.alertService.error(error);
                    console.log("error")
                });
    
  } 

}
