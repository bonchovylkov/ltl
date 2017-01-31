// Import Component form the angular core package
import {Component} from '@angular/core';

import {AlertService} from '../../../services'


// Compoent Decorator
@Component({
    //moduleId: module.id,
  //Name of our tag
  selector: 'alert',
  //Template for the tag
  template: require("./alert.html"),
  //Styles for the tag
  styles: [require("./alert.scss")],
})


export class AlertComponent {
   message: any;
 
    constructor(private alertService: AlertService) { }
 
    ngOnInit() {
        this.alertService.getMessage().subscribe(message => {
             this.message = message; 
             setTimeout(()=>{
                 this.message = null;
             },6000)
            });

        
    }

    
}



  