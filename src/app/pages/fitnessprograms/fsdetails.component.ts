
import {Component, ViewEncapsulation,OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router'
import {FitnessProgramsService,FeedMapperService,AlertService} from '../../services/'
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
  private  alert: AlertService,
    private _programsService:FitnessProgramsService,
    private mapperService:FeedMapperService ) {
    
    
  }

  newCommentValue:string = "";

  addNewComment(){
    console.log(this.newCommentValue);
    this.alert.success(this.newCommentValue,true);
    let comment = {FitnessProgramId:this.fitnessProgram.Id,Content:this.newCommentValue};
    this._programsService.addCommentToProgram(AppSettings.API_ENDPOINT_POST_COMMENT_TO_FITNESS_PROGRAM,comment).subscribe(
                        data => {
                         let comment = data.json();
                          this.fitnessProgram.commentsViewModel.push(this.mapperService.mapCommentsToFeed([comment.newComment])[0])
                          this.newCommentValue = "";
                        },
                        error => {
                            this.alert.error(error);
                            console.log("error")
                        });

  }

  addProgramInstance(){
    let instance = {FitnessProgramId:this.fitnessProgram.Id}
     this._programsService.addProgramInstance(AppSettings.API_ENDPOINT_POST_ADD_PROGRAM_INSTANCE,instance).subscribe(
                        data => {
                         let a = data.json();
                          
                        },
                        error => {
                          //  this.alertService.error(error);
                            console.log("addProgramInstance error")
                        });
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
