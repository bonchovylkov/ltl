// Import Component form the angular core package
import {Component} from '@angular/core';

// Import the Image interface
import {Image} from '../../../models';



  let IMAGES: Image[] = [
   new Image ( "Lazar", "https://scontent-fra3-1.xx.fbcdn.net/v/t31.0-8/15896157_10154326098647428_851101738802304959_o.jpg?oh=856f44d788a57c0f874252079bbb2fca&oe=591C772F" ),
   new Image ( "Dancho", "https://scontent-fra3-1.xx.fbcdn.net/v/t31.0-8/15800790_10154326094322428_3107494215577211186_o.jpg?oh=816f1966dfe9ca053876842525ee58fb&oe=5919AA9C" ),
   new Image ( "Pak Dancho", "https://scontent-fra3-1.xx.fbcdn.net/v/t1.0-9/15825993_10154326088627428_3438025809707461730_n.jpg?oh=d1fa4792f9d1dfa61a01617b77b52f6c&oe=59210F5D" ),
   new Image ( "Dz neshto", "https://scontent-fra3-1.xx.fbcdn.net/v/t31.0-8/15895990_10154325791292428_4910546981264125376_o.jpg?oh=071cb68354ea0d163247ea2aa605e076&oe=590DFDD4" ),
   new Image ( "barcelona", "https://scontent-fra3-1.xx.fbcdn.net/v/t31.0-8/15875231_10154320954087428_3008476642589730227_o.jpg?oh=aca438cc235aba29ba80dead45d7495c&oe=590ACFB0" )

   
    ];

// Compoent Decorator
@Component({
  //Name of our tag
  selector: 'css-carousel',
  //Template for the tag
  template: require("./carousel.component.html"),
  //Styles for the tag
  styles: [require("./carousel.component.css")],
})
//Carousel Component itself

export class CSSCarouselComponent {
    //images data to be bound to the template

    
  public images = IMAGES;



}


  //IMAGES array implementing Image interface
  