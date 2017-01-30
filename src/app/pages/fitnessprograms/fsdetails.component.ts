
import {Component, ViewEncapsulation,OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router'
import {FitnessProgramsService,FeedMapperService} from '../../services/'
import {AppSettings} from '../../app.settings'
import {FeedModels} from '../../models'

@Component({
  selector: 'fs-details',
  encapsulation: ViewEncapsulation.None,
  styles: [require('./fsdetails.scss')],
  template: require('./fsdetails.html'),
  providers:[FitnessProgramsService,FeedMapperService]
})
export class FsDetails implements OnInit{

  fitnessProgram:any = null;

  constructor(private  route: ActivatedRoute,
    private _programsService:FitnessProgramsService,
    private mapperService:FeedMapperService ) {
    
    
  }

  newCommentValue:string = "";

  addNewComment(){
    console.log(this.newCommentValue);
  }

  ngOnInit(){

    this.route.params.subscribe(params => {
          //comes from the route params
          let idProgram= params["id"]
          let items = this._programsService.loadFitnessProgramDetails(AppSettings.API_ENDPOINT_GET_FITNESS_PROGRAM_DETAILS,idProgram).subscribe(
                        data => {
                          this.fitnessProgram = data;
                          this.fitnessProgram.commentsViewModel =     this.mapperService.mapCommentsToFeed(this.fitnessProgram.Comments);
                        },
                        error => {
                          //  this.alertService.error(error);
                            console.log("error")
                        });
     });
  } 

}
