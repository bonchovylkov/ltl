import {Pipe, PipeTransform} from '@angular/core';
import {layoutPaths} from '../theme/index'; //can be with index or without it

@Pipe({name: 'baProfilePicture'})
export class BaProfilePicturePipe implements PipeTransform {

  transform(input:string, ext = 'png'):string {
    return layoutPaths.images.profile + input + '.' + ext;
  }
}
