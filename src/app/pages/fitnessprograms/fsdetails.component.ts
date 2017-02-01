
import {Component, ViewEncapsulation,OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router'
import {FitnessProgramsService,FeedMapperService,AlertService, UsersService} from '../../services/'
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
  isEnrolled:boolean = false;
  isUserLoggedIn: boolean = false;

  constructor(private  route: ActivatedRoute,
  private  alert: AlertService,
  private userService: UsersService,
    private _programsService:FitnessProgramsService,
    private mapperService:FeedMapperService ) {
    
    
  }



  newCommentValue:string = "";

  addNewComment(){
    console.log(this.newCommentValue);
    
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
                         this.isEnrolled = true;
                         this.alert.success("You have enrolled for this program. Check it out in your profile");
                        },
                        error => {
                          //  this.alertService.error(error);
                            console.log("addProgramInstance error")
                        });
  }

  ngOnInit(){

    this.isUserLoggedIn = this.userService.isLoggedIn();
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
