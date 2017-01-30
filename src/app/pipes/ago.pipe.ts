import {Pipe, PipeTransform} from '@angular/core';

@Pipe({name: 'timeAgo'})
export class TimeAgoPipe implements PipeTransform {

  extentiton = " ago";

  transform(input:string, format = 'minutes'):string {
      let timeAgo =  Date.now() - +(new Date(input));
      let agoInHours =  this.msToHMS(timeAgo);
      
      if (agoInHours>24){
          
          let days = Math.round(agoInHours/24);
          if(days>365){
                return Math.round(days/365) + " years"  + this.extentiton;
          }else{
              return days+" days" + this.extentiton;
          }
      }else{

          if(agoInHours<=0){
              return "just a seconds "  +this.extentiton; 
          }
          return agoInHours+" hours" + this.extentiton;
      }


  }

    msToHMS ( ms:number ):number {
        // 1- Convert to seconds:
        let seconds = ms / 1000;
        // 2- Extract hours:
        let hours = parseInt( (seconds / 3600).toString() ); // 3,600 seconds in 1 hour
        seconds = seconds % 3600; // seconds remaining after extracting hours
        // 3- Extract minutes:
        var minutes = parseInt( (seconds / 60).toString() ); // 60 seconds in 1 minute
        // 4- Keep only seconds not extracted to minutes:
        seconds = seconds % 60;
       // return ( hours+":"+minutes+":"+seconds);
       return hours;
    }
}
